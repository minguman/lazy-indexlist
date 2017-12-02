<template>
  <div class="hello">
    <index-list 
    @onSearchCancel="onSearchCancelHandle"
    @onSearchChange="onSearchChangeHandle"
    :showSearch="true">
      <template slot="list">
        <div class="lazy-cell">
          <template v-for="(arr, key ,index) in heroesMap">
            <div class="lazy-cell-divider" :key="key">{{key}}</div>
            <template v-for="hero in arr">        
              <div class="lazy-cell-item" :key="hero.hid">
                <div class="lazy-cell-item-avator">
                  <img :src="hero.avator" lazy="loaded">
                </div>
                <div class="lazy-cell-item-content">
                  <h4 class="name">{{hero.name}}<span class="nick-name">{{hero.nickName}}</span></h4>
                </div>
              </div>
            </template>
          </template>
        </div>        
      </template>
      <template slot="searchResults">
        <template  v-if="searchList.length" v-for="(hero, index) in searchList">
          <div class="lazy-cell-item" :key="hero.hid">
            <div class="lazy-cell-item-avator">
              <img :src="hero.avator" lazy="loaded">
            </div>
            <div class="lazy-cell-item-content">
              <h4 class="name">{{hero.name}}<span class="nick-name">{{hero.nickName}}</span></h4>
            </div>
          </div>
        </template>
        <p class="lazy-warning" v-if="!searchList.length">{{searchResultsError}}...</p>
      </template>
    </index-list>
  </div>
</template>

<script>
import IndexList from './indexlist/IndexList.vue'
import { getHeroesList } from '@/api/api'
export default {
  components:{
    IndexList
  },
  name: 'HelloWorld',
  data () {
    return {
      heroesList: [],
      heroesMap: [],
      searchList: [],
      searchResultsError: '没有找到相关搜索内容'
    }
  },
  methods: {
    onSearchChangeHandle(keyword){
      let searchList = []
      if(keyword){
        searchList = this._search(keyword, this.heroesMap)
      }


      console.log('搜索关键词', searchList)
      this.searchList = searchList
      
    },
    /**
     * _search 在数组里搜索指定value的元素
     * @param  { String } keyword 搜索关键词
     * @param  { Array} heroesMap [description]
     * @return {[type]}           [description]
     */
    _search: function(keyword, heroesMap) {
      var reg = new RegExp(keyword, 'ig');
      var _arr = [];
      for(var i in heroesMap){
        for(var j = 0; j < heroesMap[i].length; j++){
          if(
            reg.test(heroesMap[i][j][
                'name'
            ]) ||
            reg.test(heroesMap[i][j][
                'firstLetter'
            ]) ||
            reg.test(heroesMap[i][j][
                'nickName'
            ])
          ){
            _arr.push(heroesMap[i][j]);
          }
        }
      }
      return _arr
    },

    onSearchCancelHandle(value){
      console.log('这是一个搜索按钮', value)
    },
    /**
     * databyLetterSort 格式化数组，生成firstLetter为Key的map
     * @param  { Array } data 数据列表
     * @return { Object }  data中firstLetter为Key的map
     */
    databyLetterSort(data){
      //console.log(data)
      var obj = {}
      data.map(function(value, index, arr){
        if(!obj[value.firstLetter]) {
          obj[value.firstLetter] = [value]
        }else {
          obj[value.firstLetter].push(value)
        }
        
      })
      return obj
    },
  },

  mounted(){
    let self = this
    getHeroesList().then((res)=>{
      if(res.status === 200) {
        let data = res.data.data
        if(data && data.length){
          self.heroesList = data
         return self.databyLetterSort(data)
        }
      }
    }).then((data)=>{
      console.log('nihao', data)
      this.heroesMap = data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

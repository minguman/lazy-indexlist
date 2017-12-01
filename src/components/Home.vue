<template>
  <div class="hello">
    <index-list 
    @onSearchCancel="onSearchCancelHandle"
    :showSearch="true">
      <div class="lazy-cell">
        <template v-for="(arr, key ,index) in heroesList">
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
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    onSearchCancelHandle(value){
      console.log('这是一个搜索按钮', value)
    },
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
      console.log(obj)
      return obj
      
    },
  },

  mounted(){
    let self = this
    getHeroesList().then((res)=>{
      if(res.status === 200) {
        let data = res.data.data
        if(data && data.length){
         return self.databyLetterSort(data)
        }
      }
    }).then((data)=>{
      console.log('nihao', data)
      this.heroesList = data
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

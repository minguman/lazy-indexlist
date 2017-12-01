<template>
  <div class="hello">
<!--     <index-list 
    @onSearchCancel="onSearchCancelHandle"
    :showSearch="true">
      <div class="lazy-cell">
        <div class="lazy-cell-divider">A</div>
        <div class="lazy-cell-item">
          <div class="lazy-cell-item-avator">
            <img src="http://www.mingujie.com/uploadfile/lol/images/avatar/480.jpg" lazy="loaded">
          </div>
          <div class="lazy-cell-item-content">
            <h4 class="name">暗裔剑魔<span class="nick-name">亚托克斯</span></h4>
          </div>
        </div>
        <div class="lazy-cell-divider">B</div>
        <div class="lazy-cell-item">
          <div class="lazy-cell-item-avator">
            <img src="http://www.mingujie.com/uploadfile/lol/images/avatar/480.jpg" lazy="loaded">
          </div>
          <div class="lazy-cell-item-content">
            <h4 class="name">暗裔剑魔<span class="nick-name">亚托克斯</span></h4>
          </div>
        </div>
        <div class="lazy-cell-item">
          <div class="lazy-cell-item-avator">
            <img src="http://www.mingujie.com/uploadfile/lol/images/avatar/480.jpg" lazy="loaded">
          </div>
          <div class="lazy-cell-item-content">
            <h4 class="name">暗裔剑魔<span class="nick-name">亚托克斯</span></h4>
          </div>
        </div>
        <div class="lazy-cell-item">
          <div class="lazy-cell-item-avator">
            <img src="http://www.mingujie.com/uploadfile/lol/images/avatar/480.jpg" lazy="loaded">
          </div>
          <div class="lazy-cell-item-content">
            <h4 class="name">暗裔剑魔<span class="nick-name">亚托克斯</span></h4>
          </div>
        </div>
        <div class="lazy-cell-divider">E</div>
        <div class="lazy-cell-item">
          <div class="lazy-cell-item-avator">
            <img src="http://www.mingujie.com/uploadfile/lol/images/avatar/480.jpg" lazy="loaded">
          </div>
          <div class="lazy-cell-item-content">
            <h4 class="name">暗裔剑魔<span class="nick-name">亚托克斯</span></h4>
          </div>
        </div>
        <div class="lazy-cell-item">
          <div class="lazy-cell-item-avator">
            <img src="http://www.mingujie.com/uploadfile/lol/images/avatar/480.jpg" lazy="loaded">
          </div>
          <div class="lazy-cell-item-content">
            <h4 class="name">暗裔剑魔<span class="nick-name">亚托克斯</span></h4>
          </div>
        </div>
        <div class="lazy-cell-item">
          <div class="lazy-cell-item-avator">
            <img src="http://www.mingujie.com/uploadfile/lol/images/avatar/480.jpg" lazy="loaded">
          </div>
          <div class="lazy-cell-item-content">
            <h4 class="name">暗裔剑魔<span class="nick-name">亚托克斯</span></h4>
          </div>
        </div>
      </div>
    </index-list> -->
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
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    onSearchCancelHandle(value){
      console.log('这是一个搜索按钮', value)
    }
  },
  mounted(){
    getHeroesList().then((res)=>{
      console.log('请求完成',res)
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

<template>
  <div class="lazy-indexlist">
    <div class="lazy-search" v-if="showSearch" ref="search">
      <div class="lazy-search-input-inset lazy-bar lazy-bar-header">
        <label class="lazy-search-input-wrapper">
          <i class="icon ion-ios-search placeholder-icon"></i>
            <input class="lazy-search-input" type="search" :placeholder="searchPlaceholder" v-model="keyword">
        </label>
        <button class="lazy-button lazy-button-clear"
          @click="onCancel(keyword)" v-text="cancelText">
        </button>
      </div>
    </div>
    <div class="lazy-indexlist-content" ref="content" :style="{ 'height': currentHeight + 'px'}">
      <slot name="list"></slot>
      <div class='lazy-search-results' ref="searchResults" v-if="keyword">
        <slot name="searchResults"></slot>
      </div>
    </div>
    <div class="lazy-indexlist-nav" ref="nav" @touchstart="handleTouchStart" v-if="letterList.length">
      <ul class="lazy-indexlist-navlist">
        <li class="lazy-indexlist-navitem" v-for="item in letterList">{{item}}</li>
      </ul>
    </div>
    <div class="lazy-indexlist-indicator" v-if="currentIndicator">{{currentIndicator}}</div>
  </div>
</template>
<style lang="scss">
  .lazy-cell {
    zoom: 1;
    background-color: #FFF;
  }
  .lazy-warning {

  }
  .lazy-indexlist-nav {

    position: fixed;
    right: 0;
    top: 100px;
    bottom: 0;
    z-index: 4;
    background: transparent;
    .lazy-indexlist-navitem {
      padding: 2px 6px 2px 10px;
      font-size: 14px;
      user-select: none;
      cursor: pointer;
    }
  }
  .lazy-indexlist-indicator {
    position: absolute;
    width: 50px;
    height: 50px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    line-height: 50px;
    background-color: rgba(0,0,0,.7);
    border-radius: 5px;
    color: #fff;
    font-size: 22px;
    z-index: 9;
  }
  .lazy-indexlist-content {
    position: relative;
    margin: 0;
    padding: 0;
    overflow: auto; 
    z-index: 1;
  }
  .lazy-search-results {
    position: absolute;
    width: 100%;
    bottom: 0;
    z-index: 10;
    overflow: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #FFF;
    .lazy-cell-item {
      margin-right: 0;
    }
  }
  .lazy-cell-divider,
  .lazy-cell-item {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    margin-top: -1px;
    background-color: #fff;
    color: #444;
    position: relative;
    z-index: 2;
    display: block;

    padding: 16px;
    font-size: 16px;
    font-size: 14px;
    line-height: 14px;
    color: #444;
    text-align: left;
  }
  .lazy-cell-divider {
    background-color: #eee !important;
    background-color: #f5f5f5;
    color: #222;
    font-weight: 500;
    padding: 17px 16px 18px 16px;
  }
  .lazy-cell-item {
    margin-right: 30px;
    .name {
      font-size: 14px;
      font-weight: 600;
    }
    .nick-name {
      padding-left: 5px;
      padding-top: 3px;
      color: #999;
      font-size: 12px;      
    }
  }
  .lazy-cell-item-avator {
    display: table-cell;
    vertical-align: top;  
    img {
      width: 50px;
      height: 50px;
      display: block;     
      margin-right: 10px; 
    }
  }
  .lazy-cell-item-content {
    display: table-cell;
    vertical-align: top;     
  }


  .lazy-button {
    padding-right: 2px;
    padding-left: 2px;
    font-weight: 300;
    font-size: 17px;
    vertical-align: top;
    text-align: center;
    text-overflow: ellipsis;
  }

  .lazy-button.lazy-button-clear {
    border-color: transparent;
    background: none;    
    box-shadow: none;
    color: #4a90e2;
  }
  .lazy-bar {
    display: flex;
    transform: translate3d(0, 0, 0);
    user-select: none;
    position: absolute;
    right: 0;
    left: 0;
    z-index: 9;
    box-sizing: border-box;
    padding: 5px;
    width: 100%;
    border-width: 0;
    height: 44px;
    border-style: solid;
    border-top: 1px solid transparent;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    background-size: 0;
  }
  button {
    z-index: 1;
    padding: 0 8px;
    min-width: 0;
    min-height: 31px;
    font-weight: 400;
    font-size: 13px;
    line-height: 32px;
  }
  .lazy-bar.lazy-bar-header {
    box-shadow: 0 0 10px rgba(0,0,0,.15);
  }
  .lazy-search {
    width: 100%;
    position: relative;
    z-index: 2;
    .item-input-inset{
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      padding: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,.15);
    }
    .lazy-search-input-inset {
      -ms-flex-align: center;
      position: relative;
      padding: 6px 10px;      
    }
    .lazy-search-input {
      padding-left: 8px;
      width: 94%;
      height: 28px;
      background: transparent;
      line-height: 18px; 
      border: 0;   
    }
    .lazy-search-input-wrapper {
      display: flex;
      flex: 1 0;
      align-items: center;
      border-radius: 4px;
      padding-right: 8px;
      padding-left: 8px;
      background: #eee;  
      align-items: center;
      margin-top: -1px;
    }
    .lazy-search-input-wrapper~.lazy-button {
      margin-left: 10px;
    }
  }
</style>
<script type="text/babel">
  export default {
    name: 'lazy-indexlist',
    props: {
      //内容的高度
      contentHeight: Number,
      //是否显示搜索
      showSearch: {
        type: Boolean,
        default: true
      },
      letterList: {
        type: Array,
        default: ()=> {
          return []
        }
      },

      indexName: {
        type: [String, Array],
        default: ''
      },
      //是否显示导航
      showNav:{
        type: Boolean,
        default: true        
      },
      navPosition: {
        type: String,
        default: 'right'
      },
      searchPlaceholder: {
        type: String,
        default: '搜索英雄'
      },
      list: {
        type: Array,
        default: ()=>{
          return []
        }
      },
      height: Number,
      cancelText: {
        type: String,
        default: '取消'
      },
      searchResults: {
        type: Array,
        default:()=>{
          return []
        }
      },
      searchChange: Function,
      searchKeyword: {
        type: String,
        default: ''
      },
      searchResultsError: {
        type: String,
        default: '没有找到相关的内容'
      }
    },
    data() {
      return {
        keyword: '',
        indicatorTime: null,
        showIndicator: false,
        navOffsetX: '',
        currentIndicator: '',
        firstSection: null,
        currentHeight: '' ,
        sections: []
      }
    },
    created(){
      if(typeof(this.searchKeyword) === 'string') {
        this.keyword = this.searchKeyword || '';
      }
      
    },
    watch: {
      letterList(){
        this.init();
        
      },
      height(val) {
        if (val) {
          this.currentHeight = val;
        }
      },
      keyword: {
        handler: function(newVal, oldVal){
          this.onChange(newVal)
        }
      }
    },
    updated(){
      this.currentHeight = document.body.clientHeight - this.$refs.content.getBoundingClientRect().top
      this.init()
    },
    methods: {
      init() {

        let listItems = this.$refs.content.querySelectorAll('.lazy-cell-divider')
        if (listItems.length > 0) {
          this.firstSection = listItems[0];
          this.sections = listItems
        }
      },
      handleTouchStart(event){
        if (event.target.tagName !== 'LI') {
          return;
        }
        this.navOffsetX = event.changedTouches[0].clientX;
        this.scrollList(event.changedTouches[0].clientY);
        if (this.indicatorTime) {
          clearTimeout(this.indicatorTime);
        }
        window.addEventListener('touchmove', this.handleTouchMove);
        window.addEventListener('touchend', this.handleTouchEnd);
      },
      handleTouchMove(e) {
        e.preventDefault();
        this.scrollList(e.changedTouches[0].clientY);
      },
      handleTouchEnd() {
        this.indicatorTime = setTimeout(() => {
          this.moving = false;
          this.currentIndicator = '';
        }, 500);
        window.removeEventListener('touchmove', this.handleTouchMove);
        window.removeEventListener('touchend', this.handleTouchEnd);
      },
      scrollList(y) {
        let currentItem = document.elementFromPoint(this.navOffsetX, y);
        if (!currentItem || !currentItem.classList.contains('lazy-indexlist-navitem')) {
          return;
        }
        this.currentIndicator = currentItem.innerText;
        for(var i=0; i<this.sections.length;i++) {
          if(currentItem.innerText === this.sections[i].innerText) {
            var targetDOM = this.sections[i]
          }
        }
        if (targetDOM) {
          this.$refs.content.scrollTop = targetDOM.getBoundingClientRect().top - this.firstSection.getBoundingClientRect().top;
        }
      },
      /**
       * onCancel 取消搜索时
       * @return {[type]} [description]
       */
      onCancel(){
        this.keyword = ''
        this.$emit('onSearchCancel', this.keyword)
      },
      onChange(keyword){
        this.$emit('onSearchChange', keyword)
      }

    }  
  };
</script>


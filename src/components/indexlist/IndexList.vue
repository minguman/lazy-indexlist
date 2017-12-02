<template>
  <div class="lazy-indexlist">
    <div class="lazy-search" v-if="showSearch" ref="search">
      <div class="lazy-search-input-inset lazy-bar lazy-bar-header">
        <label class="lazy-search-input-wrapper">
          <i class="icon ion-ios-search placeholder-icon"></i>
            <input class="lazy-search-input" type="search" :placeholder="searchPlaceholder" v-model="keyword">
        </label>
        <button class="lazy-button lazy-button-clear"
          @click='onCancel(keyword)' v-text="cancelText">
        </button>
      </div>
    </div>
    <div class="lazy-indexlist-content" ref="content">
      <slot name="list"></slot>

      <div class='lazy-search-results' ref="searchResults" v-if="keyword !== ''">
        <slot name="searchResults"></slot>
      </div>
    </div>
    <div class="lazy-indexlist-nav" ref="nav">
      <ul class="lazy-indexlist-navlist">
        <li class="lazy-indexlist-navitem"></li>
      </ul>
    </div>
      </div>
</template>
<style lang="scss">
  .lazy-cell {
    zoom: 1;
  }
  .lazy-warning {

  }
  .lazy-indexlist-content {
    position: relative;
  }
  .lazy-search-results {
    position: absolute;
    width: 100%;
    bottom: 0;
    z-index: 3;
    overflow: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #FFF;
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
      contentHeight: Number,
      showSearch: {
        type: Boolean,
        default: true
      },
      indexName: {
        type: [String, Array],
        default: ''
      },
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
        keyword: ''
      }
    },
    created(){
      if(typeof(this.searchKeyword) === 'string') {
        this.keyword = this.searchKeyword || '';
      }
      
    },
    watch: {
      keyword: {
        handler: function(newVal, oldVal){
          this.onChange(newVal)
        }
      }
    },

    methods: {
      init() {

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

    },

    mounted() {

    }
  };
</script>


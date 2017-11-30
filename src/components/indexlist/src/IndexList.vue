<template>
  <div class="dida-indexlist">
    <div class="dida-indexlist-search" ref="search">
      <div class="search-wrap">
        <div class="bar bar-header item-input-inset">
          <label class="item-input-wrapper">
            <i class="icon ion-ios-search placeholder-icon"></i>
              <input type="search" :placeholder="searchPlaceholder" v-model="keywords">
          </label>
          <button class="button button-clear button-positive"
            @click='onCancel()' v-text="cancelText">
          </button>
        </div>
      </div>
    </div>
    <div class="dida-indexlist-content" ref="content">
      <slot></slot>
    </div>
    <div class="dida-indexlist-nav" ref="nav">
      <ul class="dida-indexlist-navlist">
        <li class="dida-indexlist-navitem"></li>
      </ul>
    </div>
    <div class='dida-search-results' v-if="searchKeyword !== ''">
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'dida-indexlist',

    props: {
      contentHeight: Number,
      showSearch: {
        type: Boolean,
        default: true
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
      searchKeyword: String,
      searchError: {
        type: String,
        default: '没有找到与'+ this.searchKeyword +'相关的内容!'
      }
    },

    data() {
      return {
      }
    },

    watch: {

    },

    methods: {
      init() {

      },

    },

    mounted() {

    }
  };
</script>

<style lang="scss">
  .bar {
      border: none;
      background-image: linear-gradient(0deg, #ddd, #ddd 50%, transparent 50%);
      background-position: bottom;
      background-size: 100% 1px;
      background-repeat: no-repeat;
  }
  .dida-indexlist-search {
    width: 100%;
    position: fixed;
    z-index: 2;
    .item-input-inset{
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      padding: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,.15);
    }
  }
  .item-input-wrapper {
    display: flex;
    flex: 1 0;
    align-items: center;
    border-radius: 4px;
    padding-right: 8px;
    padding-left: 8px;
    background: #eee;
  }
</style>
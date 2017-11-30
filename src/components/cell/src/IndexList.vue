<template>
  <div class="dida-indexlist">
    <div class="dida-indexlist-search" ref="search"></div>
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

<style lang="css">
</style>
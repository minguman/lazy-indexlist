<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body, ul, li {
  padding: 0;
  margin: 0;
}
ul,li,ol {
  list-style: none;
}
button, input, select, textarea {
    margin: 0;
    font-size: 100%;
    font-family: inherit;
    outline-offset: 0;
    outline-style: none;
    outline-width: 0;
    -webkit-font-smoothing: inherit;
    background-image: none;
}
input[type=search] {
    box-sizing: content-box;
    -webkit-appearance: textfield;
}
textarea, input[type="text"], input[type="password"], input[type="datetime"], input[type="datetime-local"], input[type="date"], input[type="month"], input[type="time"], input[type="week"], input[type="number"], input[type="email"], input[type="url"], input[type="search"], input[type="tel"], input[type="color"] {
    display: block;
    padding-top: 2px;
    padding-left: 0;
    height: 34px;
    color: #111;
    vertical-align: middle;
    font-size: 14px;
    line-height: 16px;
}
input[type="search"] {
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    -webkit-appearance: textfield;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

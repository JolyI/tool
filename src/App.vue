<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
@import url("./assets/iconfont/iconfont.css");
.iconfont {
  font-size: 32px;
}
html {
  background-color: #f8f8f8;
}
.page {
  padding-top: 85px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
  max-width: 750px;
  * {
    box-sizing: border-box;
  }
  img {
    display: block;
  }
}
</style>

<template>
  <div class="component-search">
    <form class="search-box" action @submit.native.prevent>
      <input type="search" class="input" placeholder="输入你想A一下的内容吧~" />
      <button class="button">搜索</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.component-search {
  position: fixed;
  z-index: 10;
  top: 80px;
  left: 0;
  right: 0;
  @height: 60px;
  // height: @height;
  background-color: #fff;
  padding: 10px 30px;
  .search-box {
    position: relative;
    height: @height;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    .input {
      flex: 1;
      margin-right: 30px;
      height: @height;
      line-height: calc(@height - 10);
      color: #333;
      font-size: 30px;
      border: none;
      padding: 0 20px;
      background-color: #f0f0f0;
      border-radius: 10px;
      &:focus {
        outline: 1px solid #f0f0f0;
      }
    }
    .button {
      background-color: #f44336;
      text-decoration: none;
      font-size: 28px;
      padding: 10px;
      border-radius: 6px;
      color: #fff;
      border: none;
      &:active {
        opacity: 0.7;
      }
    }
  }
}
</style>

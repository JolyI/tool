<template>
  <div class="page-explain">
    <mt-header fixed>
      <router-link to="/dream/index" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <template v-if="resutlt">
      <div
        class="list-item"
        v-for="(item, index) in resutlt.result"
        :key="index"
      >
        <div class="item-title">{{ index + 1 }}、{{ item.title }}</div>
        <div class="item-content" v-html="item.content"></div>
      </div>
    </template>
  </div>
</template>
<script>
import resultData from "./data.js";
export default {
  data() {
    return {
      resutlt: null
    };
  },
  created() {
    this.resutlt = resultData;
    console.log(this.resutlt);
  },
  methods: {
    // searchDream() {
    //   this.$http
    //     .searchDream({
    //       key: this.$keys.dream,
    //       keyword: "梦见蛇",
    //       format: true
    //     })
    //     .then(res => {
    //       this.res = res;
    //     });
    // }
    // 模拟网络请求
  }
};
</script>
<style lang="less" scoped>
.page-explain {
  padding-top: 80px;
  .mint-header {
    background-color: #f44336;
    font-size: 15px;
  }
  .list-item {
    margin: 20px 20px 0 20px;
    padding: 20px;
    border-bottom: 1px solid #f0f0f0;
    &:last-child {
      border-bottom: none;
    }
    .item-title {
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .item-content {
      line-height: 40px;
      font-size: 28px;
    }
  }
}
</style>

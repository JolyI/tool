<template>
  <div class="page-dream">
    <mt-header title="周公解梦" fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <template v-if="resutl">
      <div class="list-item">div.</div>
    </template>
  </div>
</template>
<script>
import resultData from "./data.js";
export default {
  data() {
    return {
      resutl: null
    };
  },
  created() {
    this.resutl = resultData;
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
.page-dream {
  padding-top: 80px;
  .mint-header {
    background-color: #f44336;
    font-size: 15px;
  }
}
</style>

<template>
  <div class="page-dream">
    <mt-header title="周公解梦" fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="search-header">
      <input />
      <mt-button icon="search"></mt-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      resutlt: null
    };
  },
  created() {},
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

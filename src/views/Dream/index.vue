<template>
  <div class="page-dream">
    <mt-header title="周公解梦" fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <search-Nav></search-Nav>
    <!-- 结果页面 -->
    <div class="list">
      <mt-cell
        :title="item.title"
        :label="item.type"
        is-link
        @click.native="toDetail(item)"
        v-for="(item, index) in resutlt.result"
        :key="index"
      ></mt-cell>
    </div>
  </div>
</template>
<script>
import searchNav from "@components/searchNav";
import RESULT_DATA from "./data";
export default {
  components: {
    searchNav
  },
  data() {
    return {
      resutlt: null
    };
  },
  created() {
    this.resutlt = RESULT_DATA;
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

    toDetail(item) {
      console.log(item);
      // return;
      this.$router.push({
        name: "dream/detail",
        params: item
      });
    }
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
  .list {
    margin-top: 80px;
  }
}
</style>

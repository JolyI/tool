<template>
  <div class="page page-cihai">
    <mt-header title="辞海" fixed>
      <mt-button icon="back" @click="$router.back()" slot="left"></mt-button>
    </mt-header>
    <search-nav @search="search" :value="searhValue" />
    <div class="content" v-if="result">
      <div class="keyword">
        <div class="title">词汇：</div>
        <div class="inner">{{ result.words }}</div>
      </div>
      <div class="keyword">
        <div class="title">释义：</div>
        <div class="inner">{{ result.content }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import searchNav from "@components/searchNav";
export default {
  components: {
    searchNav
  },
  data() {
    return {
      searhValue: "",
      result: {
        words: null,
        content: null
      }
    };
  },
  created() {},
  methods: {
    search(data) {
      this.searhValue = data;
      if (!data) return;
      this.$http.searchCihai({ keyword: this.searhValue }).then(res => {
        console.log("***********iundex************", res);
        if (res.err_code == 0) {
          this.result = "";
          this.result = res.result;
          // this.searhValue = "";
          console.log(res.result);
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.page-cihai {
  .content {
    padding: 120px 30px 0 30px;
    .keyword {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      margin-top: 30px;
      .title {
        width: 100px;
        color: #999;
        font-size: 30px;
      }
      .inner {
        flex: 1;
        font-size: 30px;
        color: #333;
      }
    }
  }
}
</style>

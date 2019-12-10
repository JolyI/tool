<template>
  <div class="page page-movie">
    <mt-header title="乌云漏洞" fixed>
      <mt-button slot="left" icon="back" @click="$router.back()"></mt-button>
    </mt-header>
    <div class="list">
      <mt-cell title="ss" is-link></mt-cell>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http.getWbugForWait({}).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style lang="less" scoped>
.page-movie {
  .mint-header {
    font-size: 15px;
    background-color: #848d94;
  }
}
</style>

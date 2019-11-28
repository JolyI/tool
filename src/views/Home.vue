<template>
  <div class="page-home">
    <div class="list">
      <div class="list-item" v-for="(item, index) in items" :key="index">
        <i class="iconfont" :class="['iconfont']"></i>
        <label>{{ item.label }}</label>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  components: {},
  data() {
    return {
      items: [
        {
          icon: "",
          label: "周公解梦"
        }
      ]
    };
  },
  created() {}
};
</script>
<style lang="less" scoped>
.page-home {
  padding-top: 80px;
  .mint-header {
    background-color: #e52736;
  }
}
</style>

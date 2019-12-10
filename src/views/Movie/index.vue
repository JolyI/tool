<template>
  <div class="page page-movie">
    <mt-header title="票房" fixed>
      <mt-button slot="left" icon="back" @click="$router.back()"></mt-button>
    </mt-header>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.page-movie {
  .mint-header {
    font-size: 15px;
  }
}
</style>

<template>
  <div class="page page-movie">
    <mt-header title="票房" fixed>
      <mt-button slot="left" icon="back" @click="$router.back()"></mt-button>
    </mt-header>
    <div class="tab-header">
      <div class="tab-header-item active">最新票房榜</div>
      <div class="tab-header-item">网票票房</div>
    </div>
    <tab>
      <tab-item></tab-item>
    </tab>
  </div>
</template>
<script>
import { Tab, TabItem } from "@components/tab";
export default {
  components: {
    Tab,
    TabItem
  },
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
  .tab-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    .tab-header-item {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80px;
      background-color: #fff;
      text-align: center;
    }
  }
}
</style>

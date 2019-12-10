<template>
  <div class="page-dreamdetail">
    <mt-header :title="title" fixed>
      <mt-button icon="back" slot="left" @click="$router.back()"></mt-button>
      <mt-button slot="right" @click="handleCopy(content, $event)"
        >复制</mt-button
      >
    </mt-header>
    <div ref="content" class="content" v-html="content"></div>
  </div>
</template>
<script>
import clip from "@/utils/clipboard"; // use clipboard directly
import clipboard from "@/directive/clipboard/index.js"; // use clipboard by v-directive

export default {
  name: "dreamDetail",
  directives: {
    clipboard
  },
  data() {
    return {
      title: "",
      content: ""
    };
  },
  created() {
    this.title = this.$route.params.title || "";
    this.content = this.$route.params.content || "";
  },
  methods: {
    handleCopy(text, event) {
      clip(this.$refs["content"].innerText, event);
    }
  }
};
</script>
<style lang="less" scoped>
.page-dreamdetail {
  padding-top: 80px;
  .mint-header {
    background-color: #f44336;
    font-size: 15px;
  }
  .content {
    font-size: 30px;
    line-height: 2em;
    padding: 20px 30px;
  }
}
</style>

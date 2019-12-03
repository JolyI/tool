<template>
  <div class="page-home">
    <img src="../assets/banner/banner2.jpg" alt class="banner" />
    <div class="list">
      <div
        class="list-item"
        v-for="(item, index) in list"
        :key="index"
        @click="routerLink(item)"
      >
        <div class="item-box">
          <div class="cover">
            <i :class="['iconfont', item.icon]"></i>
          </div>
          <div class="name">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          name: "周公解梦",
          icon: "icon-zhou",
          link: "dream/index"
        },
        {
          name: "天气",
          icon: "icon-ziyuan"
        },
        {
          name: "辞海",
          icon: "icon-xitongzidian"
        },
        {
          name: "星座配对",
          icon: "icon-xingzuo"
        },
        {
          name: "乌云漏洞",
          icon: "icon-erji-loudongsaomiaoguanli"
        },
        {
          name: "时事新闻",
          icon: "icon-xinwen"
        },
        {
          name: "历史上的今天",
          icon: "icon-lishi"
        },
        {
          name: "实时票房",
          icon: "icon-piaofang"
        },
        {
          name: "国际白银价格",
          icon: "icon-icon2"
        }
      ]
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {},
    routerLink(item) {
      if (item.link) {
        this.$router.push({ path: item.link });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.page-home {
  user-select: none;
  .banner {
    width: 100%;
    height: 150px;
  }
  .list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    .list-item {
      width: 33.33%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      &:nth-child(n) {
        .item-box {
          background-color: darkcyan;
        }
      }
      &:nth-child(2n) {
        .item-box {
          background-color: sandybrown;
        }
      }
      .item-box {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 90%;
        margin-top: 50px;
        border-radius: 10px;
        padding: 20px;
        &:active {
          opacity: 0.7;
        }
        .iconfont {
          font-size: 50px;
        }
        .name {
          font-size: 30px;
          color: rgb(43, 40, 40);
          margin-top: 10px;
        }
      }
    }
  }
}
</style>

<template>
  <div class="page-home">
    <div class="list">
      <div class="list-item" v-for="(item, index) in list" :key="index">
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
          icon: "icon-zhou"
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
    getData() {}
  }
};
</script>
<style lang="less" scoped>
.page-home {
  .banner-img {
    width: 100%;
    height: 120px;
  }
  .banner-img[lazy="loading"] {
    width: 100%;
    height: 120px;
    background-color: sandybrown;
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
      .item-box {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .iconfont {
          font-size: 40px;
        }
        .name {
          font-size: 30px;
        }
      }
    }
  }
}
</style>

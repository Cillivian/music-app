<template>
  <div class="friends">
    <van-nav-bar style="position:fixed; top:0;left:0px; width:100%;" title="朋友圈"/>
    <div class="content">
      <div class="item" v-for="(item,index) in list" :key="index">
        <img :src="item" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        "http://img1.imgtn.bdimg.com/it/u=1338339298,528381477&fm=26&gp=0.jpg",
        "http://img4.imgtn.bdimg.com/it/u=3151679178,2427664946&fm=26&gp=0.jpg",
        "http://img4.imgtn.bdimg.com/it/u=3696917474,839042634&fm=26&gp=0.jpg",
        "http://img2.imgtn.bdimg.com/it/u=1480282483,1732023019&fm=26&gp=0.jpg",
        "http://img5.imgtn.bdimg.com/it/u=2515712398,1835463983&fm=11&gp=0.jpg",
        "http://img5.imgtn.bdimg.com/it/u=4217723248,902204573&fm=11&gp=0.jpg",
        "http://img1.imgtn.bdimg.com/it/u=1465113975,4016489246&fm=11&gp=0.jpg",
        "http://img1.imgtn.bdimg.com/it/u=3106058605,1464919510&fm=26&gp=0.jpg",
        "http://img1.imgtn.bdimg.com/it/u=3112572893,1194638976&fm=26&gp=0.jpg",
        'http://img1.imgtn.bdimg.com/it/u=2668475491,154088808&fm=11&gp=0.jpg',
        'http://img3.imgtn.bdimg.com/it/u=3708312517,3791471286&fm=11&gp=0.jpg',
        'http://img2.imgtn.bdimg.com/it/u=2712771329,2311506223&fm=26&gp=0.jpg'
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.content {
  display: block !important;
  column-count: 2;
  column-gap: 0;
  height: auto;
  padding: 0.3125rem;
  margin-top:50px;
  box-sizing: border-box;
}
.item {
  position: relative;
  padding: 2px;
  counter-increment: item-counter;
}
.item img {
  width: 100%;
  height: auto;
  display: block;
}
.item::after {
  position: absolute;
  height: 1.5rem;
  width: 1.5rem;
  top: 0.125rem;
  left: 0.125rem;
  display: block;
  text-align: center;
  line-height: 1.5rem;
  background-color: rgb(50, 175, 169);
  color: #fff;
  content: counter(item-counter);
}
</style>
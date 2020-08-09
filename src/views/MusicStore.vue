<template>
  <div class="store">
    <van-nav-bar style="position:fixed; top:0;left:0px; width:100%;" title="音乐馆">
      <template #right>
        <van-icon name="audio" @click="goToPanel" size="18" />
      </template>
    </van-nav-bar>
    <div class="wrap">
      <van-search v-model="value" @search="onSearch" placeholder="请输入搜索关键词" />
      <div class="music">
        <div class="item" v-for="(item,index) in songList" :key="index" @click="selectMusic(item)">
          <img class="img" :src="item.img" />
          <div>{{item.songName}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { songList } from "../mock/mock";
export default {
  data() {
    return {
      value: "",
      songList
    };
  },
  methods: {
    onSearch() {
      let value=this.value
      this.$router.push({
        name:'SearchResult',
        params:{
          keyWord:value
        }
      })
    },
    selectMusic(music) {
      this.$store.dispatch("saveCurrentMusic", music);

      // let initBar = this.$store.state.playBar;
      // initBar['isPlay']=true;
      // await this.$store.dispatch("savePlayBar", initBar);
      
    },
    goToPanel(){
       this.$router.push("/MusicPanel");
    }
  }
};
</script>
<style lang="scss" scoped>
.store {
  width: 100%;
  min-height: calc(100% - 100px);
  position: relative;
  margin-bottom: 50px;
  background: #f2f3f7;
}
.wrap {
  padding: 10px;
  box-sizing: border-box;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.music {
  display: block !important;
  column-count: 2;
  column-gap: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow: scroll;
  .item {
    position: relative;
    padding: 5px;
    height: auto;
    background: #fff;
    & img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
}
</style>
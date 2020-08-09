<template>
  <div class="search">
    <van-nav-bar
      fixed
      @click-left="goBack"
      left-text="返回"
      left-arrow
      style="background:rgb(80, 216, 144);"
    >
      <template #title>
        <div style="color:#fff;">搜索</div>
      </template>
      <template #left>
        <van-icon color="#fff" name="arrow-left" size="18" />
      </template>
    </van-nav-bar>
    <div class="body">
      <van-search style="width:100%;" v-model="value" placeholder="请输入搜索关键词" />
      <div class="item" v-for="(item,index) in filteredSong" :key="index" @click="selectSong(item)">
        <img style="border-radius:5px 0 0 5px; width:120px;height:120px;" :src="item.img" />
        <div class="content">
            <div  class="name">{{item.songName}}</div>
            <div>{{item.singer}}</div>
            <div> <van-icon color="rgb(80, 216, 144)" name="like" />{{item.likeNum}}</div>
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
  mounted() {
    this.value = this.$route.params.keyWord;
  },
  computed: {
    // 计算数学，匹配搜索
    filteredSong: function() {
      var array = this.songList,
        value = this.value;

      if (!value) {
        return [];
      }

      value = value.trim().toLowerCase();

      array = array.filter(function(item) {
        if (
          item.songName.toLowerCase().indexOf(value) !== -1 ||
          item.singer.toLowerCase().indexOf(value) !== -1 ||
          item.lyric.toLowerCase().indexOf(value) !== -1
        ) {
          return item;
        }
      });

      // 返回过来后的数组
      return array;
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    selectSong(music) {
        this.$store.dispatch("saveCurrentMusic", music);
        this.$router.push('/MusicPanel')
    }
  }
};
</script>
<style lang="scss" scoped>
.search {
  height: 100vh;
  width: 100vw;
  .body {
    height: calc(100% - 46px);
    width: 100%;
    padding-top: 46px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #F7F8FA;
    .item{
        height:120px;
        border-radius: 5px;
        width: 90%;
        display: flex;
        margin-top:10px;
        align-items: center;
        background: #fff;
        box-shadow: 0 8px 12px #ebedf0;
        .content{
            height:100%;
            width: calc(100% - 120px);
            padding: 10px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            div{
                margin-top:5px;
                &.name{
                    font-size: 18px;
                    color:rgb(80, 216, 144);
                    font-weight: 800;
                }
            }
        }
    }
  }
}
</style>
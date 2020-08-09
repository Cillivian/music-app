<template>
  <div class="home">
    <van-tabbar v-model="active" :route="true">
      <van-tabbar-item icon="audio" to="/MusicStore" name="MusicStore">音乐馆</van-tabbar-item>
      <!-- <van-tabbar-item icon="search" to="/MusicCategory" name="MusicCategory">分类</van-tabbar-item> -->
      <van-tabbar-item icon="friends-o" to="/Friends" name="Friends">朋友圈</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o" @click="toMe" name="user">我的</van-tabbar-item>
    </van-tabbar>
    <van-notice-bar
      color="#fff"
      background="rgb(80, 216, 144)"
      :scrollable="playBar.isPlay?true:false"
      :text="`正在播放：${currentMusic.singer}--${currentMusic.songName}`"
      @click="openPanel"
    >
      <template slot="left-icon">
        <van-icon :name="playBar.isPlay?'pause-circle-o':'play-circle-o'" @click.stop="changePlay" />
      </template>
    </van-notice-bar>
    <van-popup v-model="show" position="right" :style="{ width: '70%' }">
      <div class="mine">
        <van-skeleton title avatar :row="3" :loading="loading">
          <div class="user">
            <van-image round class="user-img" width="100" height="100" :src="user.avatar" />
            <div class="user-nickname">{{user.nickname}}</div>
            <div class="user-title">{{user.moto}}</div>
          </div>
        </van-skeleton>
      </div>
    </van-popup>
    
    <router-view class="main"></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      active: 1,
      show: false,
      loading: true
    };
  },
  computed: {
    ...mapState(["isLogin", "user", "playBar", "currentMusic"])
  },
  mounted() {
    this.$nextTick(() => {
      setInterval(this.listenMusic, 0);
    });
    this.$router.push('/MusicStore')
  },
  watch: {
    show(newVal) {
      let that = this;
      return new Promise(resolve => {
        setTimeout(() => {
          that.loading = !newVal;
          resolve();
        }, 1000);
      });
    }
  },
  methods: {
    toMe() {
      this.show = true;
    },
    listenMusic() {
      if (!this.$refs.music) {
        return;
      }
      if (this.$refs.music.readyState) {
        this.playBar.maxTime = this.$refs.music.duration;
      }
      this.playBar.isPlay = !this.$refs.music.paused;
      this.playBar.currentTime = this.$refs.music.currentTime;
    },
    changePlay() {
      let playBar = this.playBar;
      playBar["isPlay"] = !this.playBar.isPlay;
      console.log(playBar);
      this.$store.dispatch("savePlayBar", playBar);
    },
    openPanel() {
      console.log("open");
      this.$router.push("/MusicPanel");
    }
  }
};
</script>
<style lang="scss" scoped>
.van-notice-bar {
  position: fixed;
  bottom: 50px;
  left: 0px;
  z-index: 10;
  width: 100%;
}
.mine {
  width: 100%;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  .user {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    &-nickname {
      margin: 15px;
      color: rgb(51, 51, 102);
      font-family: "幼圆";
      font-size: 24px;
    }
    &-title {
      text-align: left;
      margin: 15px;
      font-size: 16px;
      color: rgb(51, 51, 102);
    }
  }
}
.main {
  width: 100%;
  min-height: calc(100vh - 50px);
}
</style>

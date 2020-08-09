<template>
  <div class="music">
    <van-nav-bar fixed @click-right="goBack" style="background:rgb(80, 216, 144);">
      <template #title>
        <div style="color:#fff;">{{currentMusic.songName}}</div>
      </template>
      <template #right>
        <van-icon color="#fff" name="arrow-down" size="18" />
      </template>
    </van-nav-bar>
    <div class="body">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item class="img">
          <van-image :src="currentMusic.img"></van-image>
        </van-swipe-item>
        <van-swipe-item class="img">
          <img class="pan" :class="[playBar.isPlay?'rotate':'']" src="../assets/pan.png" />
        </van-swipe-item>
        <van-swipe-item>
          <pre class="lyric" v-html="currentMusic.lyric"></pre>
        </van-swipe-item>
      </van-swipe>
      <van-slider class="slider" v-model="playBar.currentTime" :min="0" :max="playBar.maxTime" bar-height="4px" active-color="#ee0a24" @change="changeTime" />
      <van-row class="time" type="flex" justify="space-between" align="center">
          <van-col span="2">
          {{formatTime(playBar.currentTime)}}
        </van-col>
        <van-col span="2">
          {{formatTime(playBar.maxTime)}}
        </van-col>
        </van-row>
      <van-row class="control" type="flex" justify="space-around" align="center">
        <van-col span="6">
          <van-icon name="arrow-left" />
        </van-col>
        <van-col span="6">
          <van-icon :name="playBar.isPlay?'pause':'play'" @click="changePlay" />
        </van-col>
        <van-col span="6">
          <van-icon name="arrow" />
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  watch:{
    'playBar':{
      handler: function(newVal) {
      this.$store.dispatch("savePlayBar", newVal);
         },
         deep:true
    }
  },
  beforeDestroy() {
       this.$store.dispatch("savePlayBar", this.playBar);
  },
  computed: {
    ...mapState(["isLogin", "user", "playBar", "currentMusic"])
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    init() {
    
    },
    changePlay() {
      // if (this.$refs.music.paused) {
      //   this.$refs.music.play();
      // } else {
      //   this.$refs.music.pause();
      // }
      // this.playBar.isPlay = !this.$refs.music.paused;
      // this.$nextTick(() => {
      //   document.getElementById("play").blur();
      // });
      let playBar = this.playBar;
      playBar["isPlay"] = !this.playBar.isPlay;
      console.log(playBar);
      this.$store.dispatch("savePlayBar", playBar);
    },
    changeTime(time) {
      let playBar = this.playBar;
      playBar["currentTime"] = time;
      console.log(playBar);
      this.$store.dispatch("savePlayBar", playBar);

    },
    changeVolume(v) {
      this.playBar.volume += v;
      if (this.playBar.volume > 100) {
        this.playBar.volume = 100;
      }
      if (this.music.volume < 0) {
        this.playBar.volume = 0;
      }
      this.$refs.music.volume = this.playBar.volume / 100;
    },
    formatTime(time) {
      let it = parseInt(time);
      let m = parseInt(it / 60);
      let s = parseInt(it % 60);
      return (
        (m < 10 ? "0" : "") +
        parseInt(it / 60) +
        ":" +
        (s < 10 ? "0" : "") +
        parseInt(it % 60)
      );
    }
    // changePlay() {
    //   let playBar = this.playBar;
    //  playBar['isPlay'] = !this.playBar.isPlay;
    //   console.log(playBar)
    //   this.$store.dispatch("savePlayBar", playBar);
    // },
  },
   beforeRouteLeave(to,from,next){
   to.meta.keepAlive = true;    // B跳转到A时，让A缓存，即不刷新
   next()
 }
};
</script>
<style lang="scss" scoped>
.music {
  height: 100vh;
  width: 100vw;
}
.body {
  padding-top: 46px;
  height: 100%;
  height: calc(100% - 46px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.my-swipe {
  // margin-top:46px;
  height: calc(100% - 100px);
  width: 100%;
  .van-swipe-item {
    color: #fff;
    background-color: rgb(80, 216, 144);
    &.img {
      display: flex;
      justify-content: center;
      align-items: center;
      .pan {
        height: 250px;
        width: 250px;
        border-radius: 50%;
      }
    }
    .lyric{
      text-align: center;
      box-sizing: border-box;
      padding:15px;
      color:#fff;
      height:100%;
      overflow: scroll;
    }
  }
}
.slider{
  width:90%;
}
.control {
  height: 70px;
  width:100%;
}
.time{
  height: 26px;
  width: 90%;
}
.rotate {
  animation: turn 3s linear infinite;
}
@keyframes turn {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>
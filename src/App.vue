<template>
  <div id="app">
    <router-view ></router-view> 
<audio ref="music" loop >
        <source :src="currentMusic.songSrc" type="audio/mpeg" />
      </audio>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data(){
    return{

    }
  },
   computed: {
    ...mapState(["isLogin", "user", "playBar", "currentMusic"])
  },
  created() {
    this.init()
  },
  mounted(){
      this.$nextTick(()=>{
        setInterval(this.listenMusic,1000)
      })
    },
  watch:{
    'currentMusic.songSrc':{
handler: function(newVal) {
            this.$refs.music.src=newVal
            this.$refs.music.play();
            let init={isPlay: true,
      currentTime: 0,
      maxTime: 0,
      volume: 100,}

            this.$store.dispatch("savePlayBar", init);
         },
    },
    'playBar.isPlay':{
      handler: function(newVal) {
            if(newVal){
              this.$refs.music.play();
            }else{
              this.$refs.music.pause();
            }
         },
    },
    'playBar.maxTime':{
      handler: function(newVal) {
            this.$refs.music.maxTime=newVal
         },
    },
    'playBar.currentTime':{
      handler: function(newVal) {
            this.$refs.music.currentTime=newVal
         },
    },
    'playBar':{
      handler: function(newVal) {
      this.$store.dispatch("savePlayBar", newVal);
         },
         deep:true
    }
  },
  methods:{
    init(){
      console.log('init')
      //this.$refs.music.paused=this.playBar.isPlay;
      this.$refs.music.duration=this.playBar.maxTime;
      this.$refs.music.currentTime=this.playBar.currentTime;
      console.log(this.$refs.music.currentTime)
    },
    listenMusic(){
        if(!this.$refs.music){
          return
        }
        if(this.$refs.music.readyState){
          this.playBar.maxTime = this.$refs.music.duration
        }
        this.playBar.isPlay=!this.$refs.music.paused
        this.playBar.currentTime = this.$refs.music.currentTime
      },
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin:0;
}
*{
  margin: 0;
}
html, body{ margin:0; height:100%; }
</style>

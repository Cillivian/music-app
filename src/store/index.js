import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: 1,
      username: "123456",
      password: "123456",
      nickname: "Jelly Hook",
      avatar:
        "http://file01.16sucai.com/d/file/2013/0527/20130527085528725.jpg",
      moto: "音乐本身本没有趣，有趣的是听音乐的人",
    },
    currentMusic: {
      id: 0,
      songName: "富士山下",
      img:
        "https://bkimg.cdn.bcebos.com/pic/79f0f736afc37931e4c8b22be1c4b74543a9110b?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg",
      singer: "陈奕迅",
      composer: "陈珀，C.Y.Kong",
      lyricist: "林夕",
      songSrc: require("../assets/陈奕迅 - 富士山下.mp3"),
      album: "What'S Going On...?",
      likeNum: "120",
      lyric: `拦路雨偏似雪花 饮泣的你冻吗
这风褛我给你磨到有襟花
连调了职也不怕 怎么始终牵挂
苦心选中今天想车你回家
原谅我不再送花 伤口应要结疤
花瓣铺满心里坟场才害怕
如若你非我不嫁 彼此终必火化
一生一世等一天需要代价
谁都只得那双手靠拥抱亦难任你拥有
要拥有必先懂失去怎接受
曾沿着雪路浪游 为何为好事泪流
谁能凭爱意要富士山私有
何不把悲哀感觉假设是来自你虚构
试管里找不到它染污眼眸
前尘硬化像石头 随缘地抛下便逃走
我绝不罕有 往街里绕过一周
我便化乌有
情人节不要说穿 只敢抚你发端
这种姿态可会令你更心酸
留在汽车里取暖 应该怎么规劝
怎么可以将手腕忍痛划损
人活到几岁算短 失恋只有更短
归家需要几里路谁能预算
忘掉我跟你恩怨 樱花开了几转
东京之旅一早比一世遥远
谁都只得那双手靠拥抱亦难任你拥有
要拥有必先懂失去怎接受
曾沿着雪路浪游 为何为好事泪流
谁能凭爱意要富士山私有
何不把悲哀感觉假设是来自你虚构
试管里找不到它染污眼眸
前尘硬化像石头 随缘地抛下便逃走
我绝不罕有 往街里绕过一周
我便化乌有
谁都只得那双手靠拥抱亦难任你拥有
要拥有必先懂失去怎接受
曾沿着雪路浪游 为何为好事泪流
谁能凭爱意要富士山私有
何不把悲哀感觉假设是来自你虚构
试管里找不到它染污眼眸
前尘硬化像石头 随缘地抛下便逃走
我绝不罕有 往街里绕过一周
我便化乌有
你还嫌不够 我把这陈年风褛 送赠你解咒`,
      type: "流行",
    },
    playBar: {
      isPlay: false,
      currentTime: 0,
      maxTime: 0,
      volume: 100,
    },
  },
  mutations: {
    saveUserInfo(state, user) {
      state.user = user;
    },
    saveCurrentMusic(state, currentMusic) {
      state.currentMusic = currentMusic;
    },
    savePlayBar(state, playBar) {
      state.playBar = playBar;
    },
  },
  actions: {
    saveUserInfo({ commit }, payload) {
      commit("saveUserInfo", payload);
    },
    saveCurrentMusic({ commit }, payload) {
      commit("saveCurrentMusic", payload);
    },
    savePlayBar({ commit }, payload) {
      commit("savePlayBar", payload);
    },
  },
});

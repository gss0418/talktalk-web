<template>
  <div class="messages">
    <div class="top">消息</div>
    <div class="main">
      <div class="oneList" v-for="item in messageList" :key="item.id">
        <span class="imgUrl"></span>
        <span class="message">
          <div>
            <span class="name">{{item.name}}</span>
            <span class="time">{{item.time}}</span>
          </div>
          <div class="newMessage">{{item.newMessage}}</div>
        </span>
      </div>
    </div>
    <div class="downTab">
      <span>消息</span>
      <span>联系人</span>
      <span>我的</span>
    </div>
  </div>
</template>

<script>
  const messageList = [
    {
      id: 1,
      imgUrl: '',
      name: '关沙沙',
      newMessage: '[动画表情]',
      time: '10:20'
    },
    {
      id: 2,
      imgUrl: '',
      name: '关沙沙',
      newMessage: '[动画表情]',
      time: '10:20'
    },
    {
      id: 3,
      imgUrl: '',
      name: '关沙沙',
      newMessage: '[动画表情]',
      time: '10:20'
    },
    { id: 4, imgUrl: '', name: '关沙沙', newMessage: '[动画表情]', time: '10:20' }
  ]

  export default {
    name: 'indexPage',
    components: {},
    data() {
      return {
        messageList: messageList
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  body {
    height: 100vh;
  }
  .messages {
    height: 100vh;
    width: 3.75rem;
    // position: relative;
    display: flex;
    flex-direction: column;
  }
  .top {
    height: 0.44rem;
    width: 1;
    // background-color: red;
    font-size: 0.2rem;
    font-weight: 520;
    line-height: 0.44rem;
    text-align: center;
  }
  .main {
    flex: 1;
    // padding-bottom: 0.49rem;
    // height: auto;

    .oneList {
      // border: 1px solid black;
      height: 0.48rem;
      font-size: 0.12rem;
      margin-top: 0.08rem;
      padding: 0 0.16rem 0 0.16rem;
      display: flex;
    }
    .imgUrl {
      display: block;
      background-color: lightgrey;
      height: 0.48rem;
      width: 0.48rem;
      border-radius: 50%;
    }
    .message {
      margin-left: 0.12rem;
      flex: 1;
      .name {
        color: #232529;
        font-size: 0.2rem;
        line-height: 0.28rem;
      }
      .time {
        color: #a1a9b2;
        float: right;
        line-height: 0.28rem;
      }
      .newMessage {
        color: #a1a9b2;
        line-height: 0.17rem;
      }
    }
  }
  .downTab {
    // z-index: 2;
    // position: absolute;
    // left: 0;
    // right: 0;
    // bottom: 0;
    background-color: white;
    height: 0.49rem;
    display: flex;
    box-shadow: 0 -4px 10px rgba($color: #97999b, $alpha: 0.16);
    span {
      font-size: 0.12rem;
      color: #a5a1b2;
      width: 33%;
      height: 100%;
      text-align: center;
      line-height: 3em;
    }
  }
</style>

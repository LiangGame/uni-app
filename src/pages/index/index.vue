<template>
  <view class="content">
    <h1>111</h1>
    <image class="logo" src="../../static/logo.png"></image>
    <view>
      <text class="title">{{title}}</text>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data () {
    return {
      title: 'Hello',
    };
  },
  onLoad () {
    console.log('index onLoad');
  },
  methods: {},
});
</script>

<style lang="scss">
  @import "./index.scss";
</style>

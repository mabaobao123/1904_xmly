<template>
  <div class="player">
    <xmly-player-top></xmly-player-top>
    <div class="content">
      <xmly-player-center></xmly-player-center>
      <xmly-player-content-top></xmly-player-content-top>
      <xmly-player-content-bottom></xmly-player-content-bottom>
    </div>
    <xmly-footer></xmly-footer>
  </div>
</template>

<script>
  import playerTop from '../components/xmly-player-top';
  import playerCenter from '../components/xmly-player-center';
  import playerContentTop from '../components/xmly-player-content-top';
  import playerContentBottom from '../components/xmly-player-content-bottom';
  import Footer from '../components/common/xmly-footer';
  export default {
    name: '',
    components: {
      "xmly-player-top": playerTop,
      "xmly-player-center": playerCenter,
      "xmly-player-content-top": playerContentTop,
      "xmly-player-content-bottom": playerContentBottom,
      "xmly-footer": Footer
    }
 }
</script>

<style>
  .player{
    height: 100%;
    display: -webkit-flex;
    flex-direction:column;
  }
  .content{
    -webkit-flex: 1;
    overflow-y: auto;
  }
</style>

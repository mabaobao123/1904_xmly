<template>
  <div class="disco">
    <xmly-disco-header></xmly-disco-header>
    <div class="content">
      <xmly-disco-menu></xmly-disco-menu>
      <xmly-disco-content-menu></xmly-disco-content-menu>
      <xmly-disco-recommend></xmly-disco-recommend>
      <xmly-disco-recommend-video></xmly-disco-recommend-video>
    </div>
    <xmly-footer></xmly-footer>
  </div>
</template>

<script>
  import Header from '../components/xmly-disco-header';
  import Menu from '../components/xmly-disco-menu';
  import contentMenu from '../components/xmly-disco-content-menu';
  import Recommend from '../components/xmly-disco-recommend';
  import recommendVideo from '../components/xmly-disco-recommend-video';
  import Footer from '../components/common/xmly-footer';

  export default {
     name: '',
     components: {
       "xmly-disco-header": Header,
       "xmly-disco-menu": Menu,
       "xmly-disco-content-menu": contentMenu,
       "xmly-disco-recommend": Recommend,
       "xmly-disco-recommend-video": recommendVideo,
       "xmly-footer": Footer
     }
  }
</script>

<style scoped="scoped">
  .disco{
    height: 100%;
    display: -webkit-flex;
    flex-direction:column;
  }
  .content{
    -webkit-flex: 1;
    overflow-y: auto;
  }
</style>

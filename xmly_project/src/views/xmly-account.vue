<template>
  <div class="account">
    <xmly-account-top></xmly-account-top>
    <div class="content">
      <router-link to="/xmlylogin">
        <xmly-account-info-w></xmly-account-info-w>
      </router-link>
      <xmly-account-vip-info></xmly-account-vip-info>
      <xmly-account-content></xmly-account-content>
    </div>
    <xmly-footer></xmly-footer>
  </div>
</template>

<script>
   import accountTop from '../components/xmly-account-top';
   import accountInfoW from '../components/xmly-account-info-W';
   import accountVipInfo from '../components/xmly-account-vip-info';
   import accountContent from '../components/xmly-account-content';
   import Footer from '../components/common/xmly-footer';
   export default {
     name: '',
     components: {
       "xmly-account-top": accountTop,
       "xmly-account-info-w": accountInfoW,
       "xmly-account-vip-info": accountVipInfo,
       "xmly-account-content": accountContent,
       "xmly-footer": Footer
     }
  }
</script>

<style scoped="scoped">
  .account{
    height: 100%;
    display: -webkit-flex;
    flex-direction:column;
  }
  .content{
    -webkit-flex: 1;
    overflow-y: auto;
  }
</style>

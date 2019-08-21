<template>
  <div>
      <xmly-login-header></xmly-login-header>
      <xmly-login-content></xmly-login-content>
      <xmly-login-footer></xmly-login-footer>
  </div>

</template>

<script>
  import loginHeader from '../components/xmly-login-header';
  import loginContent from '../components/xmly-login-content';
  import loginFooter from '../components/xmly-login-footer';
     export default {
      name: '',
    	components:{
         "xmly-login-header": loginHeader,
         "xmly-login-content": loginContent,
         "xmly-login-footer": loginFooter,
    	}
    }
</script>

<style scoped="scoped">

</style>

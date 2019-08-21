<template>
  <div class="xmly_page">
    <xmly-header></xmly-header>
    <xmly-search></xmly-search>
    <div class="content">
      <div class="content_top">
        <xmly-swiper></xmly-swiper>
        <xmly-button></xmly-button>
      </div>
      <xmly-headlines></xmly-headlines>
      <xmly-content-six></xmly-content-six>
      <xmly-content></xmly-content>
      <xmly-content></xmly-content>
      <xmly-content></xmly-content>
      <xmly-content></xmly-content>
      <xmly-content></xmly-content>
      <xmly-product></xmly-product>
      <xmly-content></xmly-content>
      <xmly-content></xmly-content>
    </div>
    <xmly-footer></xmly-footer>
  </div>
</template>

<script>
  import Header from '../components/common/xmly-header';
  import Search from '../components/xmly-page-search';
  import Swiper from '../components/common/xmly-swiper';
  import Button from '../components/xmly-page-button';
  import Headlines from '../components/xmly-page-headlines';
  import Contents from '../components/xmly-page-content-six';
  import Content from '../components/xmly-page-content';
  import Product from '../components/xmly-page-product';
  import Footer from '../components/common/xmly-footer';
  export default {
  name: '',
	components:{
    "xmly-header": Header,
    "xmly-search": Search,
    "xmly-swiper": Swiper,
    "xmly-button": Button,
    "xmly-headlines": Headlines,
    "xmly-content-six": Contents,
    "xmly-content": Content,
    "xmly-product": Product,
    "xmly-footer": Footer
	}
}
</script>

<style scoped="scoped">
 .xmly_page{
   height: 100%;
    display: -webkit-flex;
    flex-direction:column;
  }
.content{
  -webkit-flex: 1;
  overflow-y: auto;
  padding: .1rem .15rem;
}
.content_top{
  /* background: #fff; */
  border-radius: 5px;
  padding-bottom: .1rem;
}
</style>

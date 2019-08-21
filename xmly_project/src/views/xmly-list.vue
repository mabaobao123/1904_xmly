<template>
  <div class="list">
     <xmly-list-head></xmly-list-head>
     <div class="content">
       <xmly-list-tj></xmly-list-tj>
       <xmly-list-lis></xmly-list-lis>
     </div>
     <xmly-footer></xmly-footer>
  </div>
</template>

<script>
  import xmlyListhead from '../components/xmly-list-head';
  import xmlyListtj from '../components/xmly-list-tj';
	import xmlyListlis from '../components/xmly-list-lis';
  import myFooter from '../components/common/xmly-footer';
  // import CartApi from "../apis/CartApi"
  export default {
    name: 'xmlyList',

	data:function(){
		return {

		}
	},
  components: {
    "xmly-list-head":xmlyListhead,
		"xmly-list-tj":xmlyListtj,
		"xmly-list-lis":xmlyListlis,
		"xmly-footer":myFooter,
  }
    // created(){
    //    this._initPageData()
    // },

    // methods:{
    //   /**
    //    * @private
    //    */
    //   _initPageData(){
    //       CartApi.getCartInfoByUserId(data=>{
    //         console.log(data)
    //         this.cartInfo= data;
    //       })
    //   }
    // }
  }
</script>

<style>
.list{
  height: 100%;
  display: -webkit-flex;
  flex-direction:column;
}
.content{
  -webkit-flex: 1;
  overflow-y: auto;
}
</style>

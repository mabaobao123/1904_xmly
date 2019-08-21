<template>
     <ul class="rigth">
        <jdbt-product></jdbt-product>
        <jdbt-product></jdbt-product>
        <jdbt-product></jdbt-product>
        <jdbt-product></jdbt-product>
        <jdbt-product></jdbt-product>
      </ul>

</template>

<script>
  import jdbtProduct from './xmly-jdbt-product'

  export default{
    name:"xmlyPhbSectionRight",
    components:{
      "jdbt-product":jdbtProduct
    }
  }
</script>

<style scoped="scoped">
@import url("../assets/css/1.css");


</style>

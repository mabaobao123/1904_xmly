<template>
 <div>
    <xmly-jdbt-header></xmly-jdbt-header>
    <xmly-jdbt-nav></xmly-jdbt-nav>
    <div class="section">
      <xmly-jdbt-section-left></xmly-jdbt-section-left>
      <xmly-jdbt-section-right></xmly-jdbt-section-right>
    </div>
 </div>
</template>

<script>
  import jdbtHeader from '../components/xmly-jdbt-header';
  import jdbtNav from '../components/xmly-jdbt-nav';
  import jdbtSectionLeft from '../components/xmly-jdbt-section-left';
  import jdbtSectionRight from '../components/xmly-jdbt-section-right';

  export default {
    name: "xmly-jdbt",
    components: {
      "xmly-jdbt-header": jdbtHeader,
      "xmly-jdbt-nav": jdbtNav,
      "xmly-jdbt-section-left": jdbtSectionLeft,
      "xmly-jdbt-section-right": jdbtSectionRight
    }
  }
</script>

<style scoped="scoped">
  @import url("../assets/css/1.css");

</style>

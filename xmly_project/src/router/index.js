import Vue from 'vue'
import Router from 'vue-router'
import xmlyPage from '@/views/xmly-page'
import xmlyList from '@/views/xmly-list'
import xmlyPlayer from '@/views/xmly-player'
import xmlyDisco from '@/views/xmly-disco'
import xmlyAccount from '@/views/xmly-account'
import xmlyLogin from '@/views/xmly-login'
import xmlyJdbt from '@/views/xmly-jdbt'


// import xmlySectionRight  from  "../components/xmly-jdbt-section-right"
// import xmlySectionRight1 from  "../components/xmly-jdbt-section-right1"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: xmlyPage
    },
    {
      path: '/xmlylist',
      component: xmlyList
    },
    {
      path: '/xmlyplayer',
      component: xmlyPlayer
    },
    {
      path: '/xmlydisco',
      component: xmlyDisco
    },
     {
      path: '/xmlyaccount',
      component: xmlyAccount
    },
     {
      path: '/xmlylogin',
      component: xmlyLogin
    },
    {
      path: '/xmlyjdbt',
      component: xmlyJdbt,
      // redirect: '/xmlyjdbt/xmlySectionRight',
      // children:[
      //   {
      //      path: '../components/xmlySectionRight1',
					 // component: xmlySectionRight1
      //   },
      //   {
      //      path: '../components/xmlySectionRight',
      //   	 component: xmlySectionRight
      //   }
      // ]

    }
  ]
})

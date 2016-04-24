import Vue from 'vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Transfer from './components/Transfer.vue'
import Search from './components/Search.vue'
import AboutUs from './components/AboutUs.vue'
import StudentInfo from './components/StudentInfo.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter);

const router = new VueRouter();

router.map({
  '/home':{
    component:Home
  },
  '/transfer':{
    component:Transfer
  },
  '/search':{
    component:Search
  },
  '/about_us':{
    component:AboutUs
  },
  '/std_info':{
    component:StudentInfo
  }
});
// redirect to home if any routes are unmatched
router.redirect({
  '*':'/home'
});

// start the app
router.start(App,'#app');

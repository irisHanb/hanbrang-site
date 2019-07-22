import Vue from 'vue';
import Router from 'vue-router';
import ListView from './views/ListView.vue';
import {
  education,
  experience
} from './data';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      redirect: '/portfolio'
    },
    {
      path: '/education',
      name: 'ededucationu',
      component: ListView,
      props: {
        list: education.reverse()
      }
    },
    {
      path: '/experience',
      name: 'experience',
      component: ListView,
      props: {
        list: experience.reverse()
      }
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () =>
        import( /* webpackChunkName: "about" */ './views/ThumbView.vue'),
      props: true
    }
  ]
});
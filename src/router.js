import Vue from 'vue';
import Router from 'vue-router';
import vueMeta from 'vue-meta';
import ListView from './views/ListView.vue';
// import ThumbView from './views/ThumbView.vue';
import { education, experience } from './data';

Vue.use(Router);
Vue.use(vueMeta, {
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  ssrAttribute: 'data-vue-meta-server-rendered',
  tagIDKeyName: 'vmid'
});

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/portfolio'
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/ThumbView.vue')
    },
    {
      path: '/education',
      name: 'education',
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
    }
  ]
});

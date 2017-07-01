import Firebase from 'firebase';
import Vue from 'vue';
import VueRouter from 'vue-router';

import { routes } from './routes';

import App from './App.vue';

import store from './store/store';

import { firebaseconfig, gapiconfig } from './config'; // See sampleconfig.js for how to set this up

Vue.use(VueRouter);

Firebase.initializeApp(firebaseconfig);

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
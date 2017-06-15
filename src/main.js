import Vue from 'vue';
import VueRouter from 'vue-router';
// import VueFire from 'vuefire';

import App from './App.vue';
import { routes } from './routes';

import store from './store/store';
import Firebase from 'firebase';
import { firebaseconfig } from './firebaseconfig';

Vue.use(VueRouter);
// Vue.use(VueFire);

// Seriously... No idea how to set up firebase properly.
Firebase.initializeApp(firebaseconfig);
store.dispatch('setupFirebaseAuth', Firebase.auth());
store.dispatch('setupFirebaseDatabase', Firebase.database());
store.dispatch('setupFirebaseStorage', Firebase.storage());

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
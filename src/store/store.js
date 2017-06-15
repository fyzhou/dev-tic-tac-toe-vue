import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';
import firebase from './modules/firebase';
import lobby from './modules/lobby';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        firebase,
        lobby
    }
});

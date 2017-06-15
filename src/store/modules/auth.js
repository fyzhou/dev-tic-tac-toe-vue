const state = {
    loggedin: false,
    user: { }
};

const mutations = {
    'LOGIN' (state, user) {
        state.loggedin = true;
        state.user = user;
    },
    'LOGOUT' (state) {
        state.loggedin = false;
        state.user = { };
    }
};

const actions = {
    logIn: ({commit}, user) => {
        commit('LOGIN', user);
    },
    logOut: ({commit}) => {
        commit('LOGOUT');
    }
};

const getters = {
    getFirebaseLoginStatus: state => {
        return state.loggedin;
    },
    getFirebaseUser: state => {
        return state.user;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
const state = {
    loggedin: false
};

const mutations = {
    'LOGIN' (state) {
        state.loggedin = true;
    },
    'LOGOUT' (state) {
        state.loggedin = false;
    }
};

const actions = {
    logIn: ({commit}) => {
        commit('LOGIN');
    },
    logOut: ({commit}) => {
        commit('LOGOUT');
    }
};

const getters = {
    loggedIn: state => {
        return state.loggedin;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
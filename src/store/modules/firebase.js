const state = {
    firebaseAuth: { },
    firebaseStorage: { },
    firebaseDatabase: { }
};

const mutations = {
    'SETUP_AUTH' (state, firebaseAuth) {
        state.firebaseAuth = firebaseAuth;
    },
    'SETUP_DATABASE' (state, firebaseDatabase) {
        state.firebaseDatabase = firebaseDatabase;
    },
    'SETUP_STORAGE' (state, firebaseStorage) {
        state.firebaseStorage = firebaseStorage;
    }
};

const actions = {
    setupFirebaseAuth: ({commit}, firebase) => {
        commit('SETUP_AUTH', firebase);
    },
    setupFirebaseDatabase: ({commit}, firebase) => {
        commit('SETUP_DATABASE', firebase);
    },
    setupFirebaseStorage: ({commit}, firebase) => {
        commit('SETUP_STORAGE', firebase);
    },
};

const getters = {
    getFirebaseAuth: state => {
        return state.firebaseAuth;
    },
    getFirebaseDatabase: state => {
        return state.firebaseDatabase;
    },
    getFirebaseStorage: state => {
        return state.firebaseStorage;
    },
};

export default {
    state,
    mutations,
    actions,
    getters
};
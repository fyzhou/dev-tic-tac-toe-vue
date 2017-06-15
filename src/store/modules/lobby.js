const state = {
    gameState: {
        player1: null,
        player2: null,
        state: "WAITING"
    },
    firebaseDatabase: null,
    gameStateRef: null
};

var dbLobbyOnChangeListener = function(snapshot) {
    if(snapshot.val()) {
        state.gameState = snapshot.val();
    } else {
        state.gameState = {
            player1: null,
            player2: null,
            state: "WAITING"
        };
        state.gameStateRef.set(state.gameState);
    }
};

// TODO: Make sure that multiple executions doesn't update the db if nothing changed.
// TODO: Figure out how javascript scoping works so it can be broken out into multiple functions
// TODO: Refactor this giant mess
const mutations = {
    'REGISTER_PLAYER_1' (state, payload) {
        if(state.gameState.player1 == null && (!state.gameState.player2 || state.gameState.player2.id != payload.id)) {
            state.gameState.player1 = payload;
        }
        if(state.gameState.player1 == null && state.gameState.player2 != null) {
            state.gameState.state = "ACTIVE";
        }
        state.gameStateRef.set(state.gameState);
    },
    'REGISTER_PLAYER_2' (state, payload) {
        if(state.gameState.player2 == null && (!state.gameState.player1 || state.gameState.player1.id != payload.id)) {
            state.gameState.player2 = payload;
        }
        if(state.gameState.player1 != null && state.gameState.player2 != null) {
            state.gameState.state = "ACTIVE";
        }
        state.gameStateRef.set(state.gameState);
    },
    'RESET_LOBBY_STATE' (state) {
        state.gameState = {
            player1: null,
            player2: null,
            state: "WAITING"
        };
        state.gameStateRef.set(state.gameState);
    },
    'INITIALIZE_LOBBY' (state, firebaseDatabase) {
        state.firebaseDatabase = firebaseDatabase;
        state.gameStateRef = state.firebaseDatabase.ref('lobby');
        state.gameStateRef.on('value', dbLobbyOnChangeListener.bind(this));
    }
};

const actions = {
    registerPlayer1: ({commit}, payload) => {
        commit('REGISTER_PLAYER_1', payload);
    },
    registerPlayer2: ({commit}, payload) => {
        commit('REGISTER_PLAYER_2', payload);
    },
    resetGame: ({commit}) => {
        commit('RESET_LOBBY_STATE');
    },
    initializeGameLobby: ({commit}, firebaseDatabase) => {
        commit('INITIALIZE_LOBBY', firebaseDatabase);
    },
};

const getters = {
    getGameState: state => {
        return state.gameState;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
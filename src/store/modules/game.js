const state = {
    firebaseDatabase: null,

    gameStateRef: null,
    gameState: {
        player1: null,
        player2: null,
        state: "WAITING"
    },

    gameHistoryRef: null,
    gameHistory: []
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

var dbGameHistoryOnChangeListener = function(snapshot) {
    if(snapshot.val()) {
        state.gameHistory = snapshot.val();
    } else {
        state.gameHistory = [];
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

        state.gameHistory = [];
        state.gameHistoryRef.set(state.gameHistory);
    },
    'INITIALIZE_LOBBY' (state, firebaseDatabase) {
        state.firebaseDatabase = firebaseDatabase;
        
        state.gameStateRef = state.firebaseDatabase.ref('lobby');
        state.gameStateRef.on('value', dbLobbyOnChangeListener.bind(this));

        state.gameHistoryRef = state.firebaseDatabase.ref('gamehistory');
        state.gameHistoryRef.on('value', dbGameHistoryOnChangeListener.bind(this));
    },
    'ADD_TO_GAME_HISTORY' (state, payload) {
        state.gameHistory.push({
            turn: state.gameHistory.length + 1,
            player: payload.player,
            cell: payload.cell
        })
        state.gameHistoryRef.set(state.gameHistory);
        console.log('ADD_TO_GAME_HISTORY - gameHistory: ' + JSON.stringify(state.gameHistory));
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
    addToGameHistory: ({commit}, payload) => {
        commit('ADD_TO_GAME_HISTORY', payload);
    },
};

const getters = {
    getGameState: state => {
        return state.gameState;
    },
    getGameHistory: state => {
        return state.gameHistory;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
import Home from './components/Home.vue';
import GameLobby from './components/GameLobby.vue';
import TicTacToe from './components/TicTacToe.vue';


export const routes = [
    { path: '/', component: Home },
    { path: '/lobby', component: GameLobby },
    { path: '/tictactoe', component: TicTacToe },
];
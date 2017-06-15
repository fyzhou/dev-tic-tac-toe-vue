import Home from './components/Home.vue';
import GameLobby from './components/GameLobby.vue';
// import Stocks from './components/stocks/Stocks.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/lobby', component: GameLobby },
    // { path: '/stocks', component: Stocks }
];
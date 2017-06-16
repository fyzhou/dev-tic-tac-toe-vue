import Home from './components/Home.vue';
import TicTacToePage from './components/tictactoe/TicTacToePage.vue';
import GameLobby from './components/tictactoe/GameLobby.vue';
import TicTacToeGame from './components/tictactoe/TicTacToeGame.vue';
import TicTacToeGameMock from './components/tictactoe/TicTacToeGameMock.vue';


export const routes = [
    { path: '/', component: Home },
    { path: '/game', component: TicTacToePage },
    
    // Testing Pages
    { path: '/test/lobby', component: GameLobby },
    { path: '/test/tictactoe', component: TicTacToeGame },
    
    // Mock Pages
    { path: '/mock/tictactoe', component: TicTacToeGameMock },
];
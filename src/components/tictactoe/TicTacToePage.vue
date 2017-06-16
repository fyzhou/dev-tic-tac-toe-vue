<template>
    <div>
        <template v-if="ready">
            <app-game></app-game>
        </template>
        <template v-else>
            <app-lobby></app-lobby>
        </template>
    </div>
    
</template>

<script>
    import GameLobby from './GameLobby.vue';
    import TicTacToeGame from './TicTacToeGame.vue';
    export default {
        components: {
            'app-lobby': GameLobby,
            'app-game':TicTacToeGame
        },
        data() {
            return {

            }
        },
        computed: {
            user() {
                return this.$store.getters.getFirebaseUser;
            },
            gameState() {
                console.log('gameState.state: ' + this.$store.getters.getGameState.state);
                return this.$store.getters.getGameState;
            },
            ready() {
                console.log('Ready: ' + this.$store.getters.getGameState.player1);
                console.log('Ready: ' + this.$store.getters.getGameState.player2);
                return this.$store.getters.getGameState.player1 && this.$store.getters.getGameState.player2;
            }
        },
        methods: {
            start() {
                if(this.ready) {

                }
            },
            registerPlayer1() {
                this.$store.dispatch('registerPlayer1', {id: this.user.uid, name: this.user.displayName})
            },
            registerPlayer2 () {
                this.$store.dispatch('registerPlayer2', {id: this.user.uid, name: this.user.displayName})
            },
            reset() {
                this.$store.dispatch('resetGame');
            }
        }
    }
</script>
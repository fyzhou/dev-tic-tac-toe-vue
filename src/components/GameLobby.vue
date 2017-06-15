<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Game Lobby</h1>
                    <h6>You can start a game of tic tac toe or watch a game that's in progress.</h6>
                    <button class="btn btn-primary" @click="start">{{ ready ? "Start" : "Waiting on Players" }}</button>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-1 text-center" style=""></div>


                <div 
                    class="col-md-4 text-center" 
                    style="border-style: solid;border-width: 5px;"
                    v-show="!gameState.player1"
                    >
					    <label>Player 1: No one yet.</label>
                        <button class="btn btn-primary" @click="registerPlayer1">Register?</button>
                </div>
                <div 
                    class="col-md-3 text-center" 
                    style="border-style: solid;border-width: 5px;"
                    v-show="gameState.player1"
                    >Player 1: {{ gameState.player1 ? gameState.player1.name : "" }}</div>


                <div class="col-md-2 text-center" style=""></div>


                <div 
                    class="col-md-4 text-center" 
                    style="border-style: solid;border-width: 5px;"
                    v-show="!gameState.player2"
                    >
					    <label>Player 2: No one yet.</label>
                        <button class="btn btn-primary" @click="registerPlayer2">Register?</button>
                </div>
                <div 
                    class="col-md-3 text-center" 
                    style="border-style: solid;border-width: 5px;"
                    v-show="gameState.player2"
                    >Player 1: {{ gameState.player2 ? gameState.player2.name : "" }}</div>


                <div class="col-md-2 text-center" style=""></div>
            </div>
        </div>
        <button class="btn btn-primary" @click="reset">Reset</button>
    </div>
    
</template>

<script>
    export default {
        computed: {
            user() {
                return this.$store.getters.getFirebaseUser;
            },
            gameState() {
                return this.$store.getters.getGameState;
            },
            ready() {
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
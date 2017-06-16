<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-8 text-center">
                        <h1>Game Lobby</h1>
                        <h5>You can start a game of tic tac toe or watch a game that's in progress.</h5>
                        <div class="row">
                            <!-- Player 1 -->
                            <div class="col-md-6">
                                <div 
                                    class="text-center" 
                                    v-show="!gameState.player1"
                                    >
                                        <label>Player 1: No one yet.</label><br>
                                        <button class="btn btn-default" @click="registerPlayer1">Join Lobby?</button>
                                </div>
                                <div 
                                    class="text-center" 
                                    v-show="gameState.player1"
                                    >
                                        <label>Player 1: {{ gameState.player1 ? gameState.player1.name : "" }}</label>
                                        <h4><span class="label label-success" style="font-size: 100%">Ready</span></h4>
                                </div>
                            </div>
                            <!-- Player 2 -->
                            <div class="col-md-6">
                                <div 
                                    class="text-center" 
                                    v-show="!gameState.player2"
                                    >
                                        <label>Player 2: No one yet.</label><br>
                                        <button class="btn btn-default" @click="registerPlayer2">Join Lobby?</button>
                                </div>
                                <div 
                                    class="text-center" 
                                    v-show="gameState.player2"
                                    >
                                        <label>Player 2: {{ gameState.player2 ? gameState.player2.name : "" }}</label>
                                        <h4><span class="label label-success" style="font-size: 100%">Ready</span></h4>
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <!-- <h5>Reset if you don't want to wait in the lobby anymore.</h5> -->
                            <button class="btn btn-warning" @click="reset">Reset Lobby</button>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <h2>TODO: Add Chatroom</h2>
                    </div>
                </div>
            </div>
        </div>
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
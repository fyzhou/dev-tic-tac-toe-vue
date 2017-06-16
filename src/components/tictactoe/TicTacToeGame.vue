<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-4">
                        <div class="jumbotron well">
                            <h2 v-show="!gameover.fin">Player {{ viewstate.currentTurnNumber }}'s turn. Waiting on {{ viewstate.currentTurnPlayerName }}</h2>
                            <h2 v-show="gameover.fin">
                                Game Over! Winner: {{ gameover.winner }}
                                <button class="btn btn-primary" v-if="gameover.fin" @click="reset">Restart</button>
                            </h2>
                            
                        </div>
                        <!-- glyphicon-record is used for O and glyphicon-remove is for X -->
                        <table class="mycentered table table-bordered table-condensed">
                            <tbody>
                                <tr class="success">
                                    <td class="ttt-cell" @click="place(0)"><i class="glyphicon square" :class="[ this.grid[0] == 'O' ? 'glyphicon-record' : '', this.grid[0] == 'X' ? 'glyphicon-remove' : '' ]"></i></td>
                                    <td class="ttt-cell" @click="place(1)"><i class="glyphicon square" :class="[ this.grid[1] == 'O' ? 'glyphicon-record' : '', this.grid[1] == 'X' ? 'glyphicon-remove' : '' ]"></i></td>
                                    <td class="ttt-cell" @click="place(2)"><i class="glyphicon square" :class="[ this.grid[2] == 'O' ? 'glyphicon-record' : '', this.grid[2] == 'X' ? 'glyphicon-remove' : '' ]"></i></td>
                                </tr>
                                <tr class="active">
                                    <td class="ttt-cell" @click="place(3)"><i class="glyphicon square" :class="[ this.grid[3] == 'O' ? 'glyphicon-record' : '', this.grid[3] == 'X' ? 'glyphicon-remove' : '' ]"></i></td>
                                    <td class="ttt-cell" @click="place(4)"><i class="glyphicon square" :class="[ this.grid[4] == 'O' ? 'glyphicon-record' : '', this.grid[4] == 'X' ? 'glyphicon-remove' : '' ]"></i></td>
                                    <td class="ttt-cell" @click="place(5)"><i class="glyphicon square" :class="[ this.grid[5] == 'O' ? 'glyphicon-record' : '', this.grid[5] == 'X' ? 'glyphicon-remove' : '' ]"></i></td>
                                </tr>
                                <tr class="info">
                                    <td class="ttt-cell" @click="place(6)"><i class="glyphicon square" :class="[ this.grid[6] == 'O' ? 'glyphicon-record' : '', this.grid[6] == 'X' ? 'glyphicon-remove' : '' ]"></i></td>
                                    <td class="ttt-cell" @click="place(7)"><i class="glyphicon square" :class="[ this.grid[7] == 'O' ? 'glyphicon-record' : '', this.grid[7] == 'X' ? 'glyphicon-remove' : '' ]"></i></td>
                                    <td class="ttt-cell" @click="place(8)"><i class="glyphicon square" :class="[ this.grid[8] == 'O' ? 'glyphicon-record' : '', this.grid[8] == 'X' ? 'glyphicon-remove' : '' ]"></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div> <!-- col-md-4 -->
                    <div class="col-md-4">
                        <div class="list-group">
                                <a href="#" class="list-group-item active">Action List TODO: Actually populate the turns</a>
                        </div>
                        <div class="list-group" style="max-height: 250px; overflow-y: scroll">
                            <div class="list-group-item">Turn 1 - Player 1 - X - Cell 1:1</div>
                            <div class="list-group-item">Turn 2 - Player 2 - O - Cell 1:3</div>
                            <div class="list-group-item">Turn 3 - Player 1 - X - Cell 2:2</div>
                            <div class="list-group-item">Turn 4 - Player 2 - O - Cell 3:3</div>
                            <div class="list-group-item">Turn 5 - Player 1 - X - Cell 2:3</div>
                            <div class="list-group-item">Turn 6 - Player 2 - O - Cell 2:1</div>
                            <div class="list-group-item">Turn 7 - Player 1 - X - Cell 3:2</div>
                            <div class="list-group-item">Turn 8 - Player 2 - O - Cell 1:2</div>
                            <div class="list-group-item">Turn 9 - Player 1 - X - Cell 3:1</div>
                        </div>
                    </div>
                    <!-- col-md-4 -->
                    <div class="col-md-4">
                        <div class="jumbotron well">
                            <h2>TODO: Add chat or something.</h2>
                        </div>
                    </div> <!-- col-md-4 -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // 1 2 3
                // 4 5 6
                // 7 8 9
                // grid: [/*1*/"X", /*2*/"O", /*3*/"O", /*4*/"O", /*5*/"X", /*6*/"X", /*7*/"X", /*8*/"X", /*9*/"O"]
                // grid: [/*1*/"", /*2*/"", /*3*/"", /*4*/"", /*5*/"", /*6*/"", /*7*/"", /*8*/"", /*9*/""]
            }
        },
        computed: {
            gameHistory() {
                // console.log('gameState.state: ' + JSON.stringify(this.$store.getters.getGameHistory));
                return this.$store.getters.getGameHistory;
            },
            grid() {
                console.log('Figuring out Current Game State. GameHistory contains ' + this.gameHistory.length + " turns.");
                var result = [/*1*/"", /*2*/"", /*3*/"", /*4*/"", /*5*/"", /*6*/"", /*7*/"", /*8*/"", /*9*/""];
                this.gameHistory.forEach(t => {
                    console.log("Processing turn: " + JSON.stringify(t));
                    var token = "";
                    if(t.player.player == 1) {
                        token = "X";
                    }
                    if(t.player.player == 2) {
                        token = "O";
                    }
                    result.splice(t.cell, 1, token);
                });
                return result;
            },
            user() {
                var firebaseUser = this.$store.getters.getFirebaseUser;
                var gameState = this.$store.getters.getGameState;
                var playerNum = 0;
                if(gameState.player1 && gameState.player1.id == firebaseUser.uid) {
                    playerNum = 1;
                } else if(gameState.player2 && gameState.player2.id == firebaseUser.uid) {
                    playerNum = 2;
                } else {
                    playerNum = 0;
                }
                return {
                    uid: firebaseUser.uid,
                    displayName: firebaseUser.displayName,
                    player: playerNum,
                };
            },
            gameover() {
                console.log("Checking if the game is over for: " + JSON.stringify(this.grid));
                let winnerRows = [
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9],
                    [1, 5, 9],
                    [3, 5, 7],
                    [1, 4, 7],
                    [2, 5, 8],
                    [3, 6, 9]
                ];
                let gameover = false;
                let winner = "";
                winnerRows.forEach(rows => {
                    let firstItem = this.grid[rows[0]-1];
                    let over = true;
                    rows.forEach(index => {
                        if(!over || this.grid[index-1] == "" || this.grid[index-1] != firstItem) {
                            over = false;
                        }
                    });
                    if(over) {
                        gameover = true;
                        winner = firstItem;
                    }
                });
                return {
                    fin: gameover,
                    winner: winner
                };
            },
            viewstate() {
                var playerNum =  (this.$store.getters.getGameHistory.length % 2) + 1;
                var displayName = "";
                if(playerNum == 1) {
                    displayName = this.$store.getters.getGameState.player1.name;
                } else {
                    displayName = this.$store.getters.getGameState.player2.name;
                }
                return {
                    currentTurnNumber: playerNum,
                    currentTurnPlayerName: displayName
                };
            }
        },
        methods: {
            place(cell) {
                console.log(JSON.stringify(this.user) + " is trying to place at cell: " + cell);
                if(this.user.player == 0) {
                    console.log("Nothing happened because this is not a player");
                    // do nothing because this person isn't a player
                    return;
                }

                if(this.gameover.fin) {
                    console.log("Nothing happened because the game is over");
                    // do nothing because the game is over
                    return;
                }

                if(this.gameHistory.length % 2 == 0 && this.user.player == 1) {
                    // you are player 1 and it's your turn
                    console.log("Player 1 dispatched");
                    this.$store.dispatch('addToGameHistory', {
                        cell: cell,
                        player: this.user
                    });
                    return;
                }
                
                if(this.gameHistory.length % 2 == 1 && this.user.player == 2) {
                    // you are player 2 and it's your turn
                    console.log("Player 2 dispatched");
                    this.$store.dispatch('addToGameHistory', {
                        cell: cell,
                        player: this.user
                    });
                    return;
                }
            },
            reset() {
                this.$store.dispatch('resetGame');
            }
        }
    }
</script>

<style>
    .ttt-cell {
        text-align: center;
        width:100px;
        height:100px;
    }
    .square{
        font-size:100px;
    }
</style>
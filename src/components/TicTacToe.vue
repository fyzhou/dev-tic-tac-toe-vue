<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-4">
                        <!-- glyphicon-record is used for O and glyphicon-remove is for X -->
                        <table class="mycentered table table-bordered table-condensed">
                            <tbody>
                                <tr class="success">
                                    <td class="ttt-cell" @click="shuffle(0)"><i class="glyphicon square" :class="[ grid[0] == 'O' ? 'glyphicon-record' : '', grid[0] == 'X' ? 'glyphicon-remove' : '' ]"></i></td>
                                    <td class="ttt-cell" @click="shuffle(1)"><i class="glyphicon square" :class="[ grid[1] == 'O' ? 'glyphicon-record' : '', grid[1] == 'X' ? 'glyphicon-remove' : '' ]"></i></td>
                                    <td class="ttt-cell" @click="shuffle(2)"><i class="glyphicon square" :class="[ grid[2] == 'O' ? 'glyphicon-record' : '', grid[2] == 'X' ? 'glyphicon-remove' : '' ]"></i></td>
                                </tr>
                                <tr class="active">
                                    <td class="ttt-cell" @click="shuffle(3)"><i class="glyphicon square" :class="[ grid[3] == 'O' ? 'glyphicon-record' : '', grid[3] == 'X' ? 'glyphicon-remove' : '' ]"></i></td>
                                    <td class="ttt-cell" @click="shuffle(4)"><i class="glyphicon square" :class="[ grid[4] == 'O' ? 'glyphicon-record' : '', grid[4] == 'X' ? 'glyphicon-remove' : '' ]"></i></td>
                                    <td class="ttt-cell" @click="shuffle(5)"><i class="glyphicon square" :class="[ grid[5] == 'O' ? 'glyphicon-record' : '', grid[5] == 'X' ? 'glyphicon-remove' : '' ]"></i></td>
                                </tr>
                                <tr class="info">
                                    <td class="ttt-cell" @click="shuffle(6)"><i class="glyphicon square" :class="[ grid[6] == 'O' ? 'glyphicon-record' : '', grid[6] == 'X' ? 'glyphicon-remove' : '' ]"></i></td>
                                    <td class="ttt-cell" @click="shuffle(7)"><i class="glyphicon square" :class="[ grid[7] == 'O' ? 'glyphicon-record' : '', grid[7] == 'X' ? 'glyphicon-remove' : '' ]"></i></td>
                                    <td class="ttt-cell" @click="shuffle(8)"><i class="glyphicon square" :class="[ grid[8] == 'O' ? 'glyphicon-record' : '', grid[8] == 'X' ? 'glyphicon-remove' : '' ]"></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div> <!-- col-md-4 -->
                    <div class="col-md-4">
                        <div class="list-group">
                            <a href="#" class="list-group-item active">Action List</a>
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
                    </div> <!-- col-md-4 -->
                    <div class="col-md-4">
                        <div class="jumbotron well">
                            <h2>TODO</h2>
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
                grid: [/*1*/"X", /*2*/"O", /*3*/"O", /*4*/"O", /*5*/"X", /*6*/"X", /*7*/"X", /*8*/"X", /*9*/"O"]
            }
        },
        methods: {
            shuffle(cell) {
                console.log("shuffling cell: " + cell + " was: " + this.grid[cell]);
                if(this.grid[cell] == "") { 
                    console.log("shuffling cell: " + cell + " to X");
                    this.grid.splice(cell, 1, "X");
                } else if(this.grid[cell] == "X") { 
                    console.log("shuffling cell: " + cell + " to O");
                    this.grid.splice(cell, 1, "O");
                } else if(this.grid[cell] == "O") { 
                    console.log("shuffling cell: " + cell + " to Blank");
                    this.grid.splice(cell, 1, "");
                }
                console.log("exiting shuffle");
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
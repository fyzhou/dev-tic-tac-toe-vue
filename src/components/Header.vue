<template>
    <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <router-link to="/" class="navbar-brand">Multiplayer Tic Tac Toe</router-link>
                </div>

                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li
                                class="dropdown"
                                :class="{open: isDropdownOpen}"
                                v-if='isLoggedInWithFirebase'
                                @click="isDropdownOpen = !isDropdownOpen">
                            <a
                                    href="#"
                                    class="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false">Navi<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><router-link to="/" class="">Home</router-link></li>
                                <li><router-link to="/game" class="">Tic Tac Toe</router-link></li>
                                <!-- <li><router-link to="/test/lobby" class="">Game Lobby (Devo Page)</router-link></li> -->
                                <!-- <li><router-link to="/test/tictactoe" class="">Tic Tac Toe (Devo Page)</router-link></li> -->
                                <!-- <li><router-link to="/mock/tictactoe" class="">Tic Tac Toe (Mock Page)</router-link></li> -->
                            </ul>
                        </li>
                    </ul>
                    <strong class="navbar-text navbar-right"></strong>
                    <button type="submit" class="navbar-btn btn btn-secondary navbar-right" @click="login">
                        <img 
                            :src='user.photoURL' 
                            alt="Your Photo" 
                            style="width:20px; height:20px; border-radius:20px;">
                        <strong>{{ isLoggedInWithFirebase ? 'Logout' : 'Login' }}</strong>
                    </button>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
    </div>
</template>

<script>
    import Firebase from 'firebase';
    export default {
        data() {
          return {
              isDropdownOpen: false,
          }
        },
        computed: {
            isLoggedInWithFirebase() {
                return this.$store.getters.getFirebaseLoginStatus;
            },
            user() {
                return this.$store.getters.getFirebaseUser;
            }
        },
        methods: {
            login() {
                if(this.isLoggedInWithFirebase) {
                    Firebase.auth().signOut();
                } else {
                    var provider = new Firebase.auth.GoogleAuthProvider();
                    Firebase.auth().signInWithPopup(provider);
                }
            }
        }
    }
</script>
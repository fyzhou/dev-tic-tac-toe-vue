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
                                <li><router-link to="/lobby" class="">Game Lobby</router-link></li>
                            </ul>
                        </li>
                    </ul>
                    <strong class="navbar-text navbar-right"></strong>
                    <button type="submit" class="navbar-btn btn btn-secondary navbar-right" @click="login">
                        <strong>{{ isLoggedInWithFirebase ? 'Logout' : 'Login' }} {{ isLoggedInWithFirebase }}</strong>
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
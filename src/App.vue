<template>
    <div class="container">
        <app-header></app-header>
        <div class="row">
            <div class="col-xs-12">
                <template v-if="isAuthorized">
                    <router-view></router-view>
                </template>
                <template v-else>
                    <app-login></app-login>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import Login from './components/Login.vue';
    export default {
        components: {
            appHeader: Header,
            appLogin: Login
        },
        computed: {
            isAuthorized() {
                return this.$store.getters.getFirebaseLoginStatus;
            }
        },
        created() {
            // Not sure where to put Firebase auth stuff.
            // TODO: Figure out if I can just use Firebase.auth.onAuthStateChanged and move this to the Header.vue
            this.$store.getters.getFirebaseAuth.onAuthStateChanged(this.firebaseOnAuthStateChanged.bind(this));
            this.$store.dispatch('initializeGameLobby', this.$store.getters.getFirebaseDatabase);
        },
        methods: {
            firebaseOnAuthStateChanged(user) {
                if (user) { // User is signed in!
                    this.$store.dispatch('logIn', user);
                } else { 
                    this.$store.dispatch('logOut');
                }
            }
        }
    }
</script>

<style>
    body {
        padding: 30px;
    }
</style>


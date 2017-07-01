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
    import Firebase from 'firebase';

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
            Firebase.auth().onAuthStateChanged(this.firebaseOnAuthStateChanged.bind(this));
            Firebase.auth().getRedirectResult().then(function(result) {
                console.log('Get Redirect Result');
                console.log(JSON.stringify(result));
                // The firebase.User instance:
                var user = result.user;
                // The Facebook firebase.auth.AuthCredential containing the Facebook
                // access token:
                var credential = result.credential;
                // As this API can be used for sign-in, linking and reauthentication,
                // check the operationType to determine what triggered this redirect
                // operation.
                var operationType = result.operationType;
            }, function(error) {
                // The provider's account email, can be used in case of
                // auth/account-exists-with-different-credential to fetch the providers
                // linked to the email:
                var email = error.email;
                // The provider's credential:
                var credential = error.credential;
                // In case of auth/account-exists-with-different-credential error,
                // you can fetch the providers using this:
                if (error.code === 'auth/account-exists-with-different-credential') {
                    auth.fetchProvidersForEmail(email).then(function(providers) {
                    // The returned 'providers' is a list of the available providers
                    // linked to the email address. Please refer to the guide for a more
                    // complete explanation on how to recover from this error.
                    });
                }
            });
            this.$store.dispatch('initializeGameLobby', Firebase.database());
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


<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="text-center">
                    <h1>Home</h1>
                    <h1>Welcome {{ user.displayName }}!</h1>
                    <h6>You can start a game of tic tac toe or watch a game that's in progress.</h6>
                    <h6>Navigate to the Game Lobby to start it up!</h6>
                    <hr>
                    <h6>Here's all the information Google knows about you:</h6>
                    <h6>UID: {{ user.uid }}</h6>
                    <h6>Display Name: {{ user.displayName }}</h6>
                    <h6>Email: {{ user.email }}</h6>
                    <h6>Email Verified: {{ user.emailVerified }}</h6>
                    <h6>Phone Number: {{ user.phoneNumber }}</h6>
                    <h6>isAnonymous: {{ user.isAnonymous }}</h6>
                    <h6>Photo URL: {{ user.photoURL }}</h6>
                    <img :src='user.photoURL' alt="Your Photo" style="width: 40px;height: 40px;">
                    <hr>
                    <router-link to="/game" class="btn btn-primary">Play Tic Tac Toe</router-link>
                </div>
                <!-- Testing Drive V3 API -->
                <div class="text-center">
                    <h1>Drive Testing</h1>
                    
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
            }
        }
    }
</script>
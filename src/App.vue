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
                return this.$store.getters.loggedIn;
            }
        },
    }
</script>

<style>
    body {
        padding: 30px;
    }
</style>


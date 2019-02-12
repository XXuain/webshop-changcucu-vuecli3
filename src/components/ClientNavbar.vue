<template>
    <div>
        <header>
            <nav class="navbar navbar-fixed-top" :class="{ 'show' : open_nav }">
                <div class="navbar-header">
                    <a href="#" class="navbar-mobil-btn" :class="{ 'open' : open_nav }" @click="open_nav = !open_nav">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                    <div class="navbar-icon">
                        <a href="#" class="navbar-icon-link">
                            <img :src="`${baseUrl}/img/icon-ig.svg`" width="26" alt="">
                        </a>
                        <a href="#" class="navbar-icon-link">
                            <img :src="`${baseUrl}/img/icon-fb.svg`" width="26" alt="">
                        </a>
                    </div>
                    <router-link class="navbar-logo" to="home">
                        <img :src="`${baseUrl}/img/logo.svg`" alt="">
                    </router-link>
                    <div class="navbar-car">
                        <router-link to="check_out">
                            <img :src="`${baseUrl}/img/icon-shopping-cart.svg`" width="26" alt="">
                        </router-link>
                    </div>
                </div>
                <div class="navbar-footer">
                    <div class="navbar-search">
                        <img :src="`${baseUrl}/img/icon-search.svg`" width="15" alt="">
                    </div>
                    <div class="navbar-nav">
                        <router-link to="works" class="navbar-nav-link">商品列表</router-link>
                        <a href="#" class="navbar-nav-link">訂製服務</a>
                        <a href="#" class="navbar-nav-link">最新商品</a>
                    </div>
                    <div class="navbar-text">
                        <router-link to="/login" class="navbar-text-link d-none d-md-block">登入</router-link>
                        <router-link to="/login" class="btn btn-block btn-outline-dark d-md-none mb-3">登入</router-link>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
    /* eslint-disable */
    export default {
        // name: "usernavbar",
        data() {
            return {
                baseUrl: process.env.VUE_APP_IMGURL,
                open_nav: false,
            }
        },
        methods: {}
    };
</script>
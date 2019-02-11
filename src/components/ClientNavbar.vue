<template>
    <div>
        <header>
            <nav class="navbar" :class="{ 'show' : open_nav }">
                <div class="navbar-header">
                    <div class="navbar-icon">
                        <a href="#" class="navbar-mobil-btn" :class="{ 'open' : open_nav }" @click="open_nav = !open_nav">
                            <span></span>
                            <span></span>
                            <span></span>
                        </a>
                        <a href="#" class="navbar-icon-link">
                            <img src="/img/icon-ig.svg" width="26" alt="">
                        </a>
                        <a href="#" class="navbar-icon-link">
                            <img src="/img/icon-fb.svg" width="26" alt="">
                        </a>
                    </div>
                    <a class="navbar-logo" href="#">
                        <img src="/img/logo.svg" alt="">
                    </a>
                    <div class="navbar-text">
                        <a href="#">
                            <img src="/img/icon-shopping-cart.svg" width="26" alt="">
                        </a>
                    </div>
                </div>
                <div class="navbar-footer">
                    <div class="navbar-search">
                        <img src="/img/icon-search.svg" width="15" alt="">
                    </div>
                    <div class="navbar-nav">
                        <a href="#" class="navbar-nav-link">商品列表</a>
                        <a href="#" class="navbar-nav-link">訂製服務</a>
                        <a href="#" class="navbar-nav-link">最新商品</a>
                    </div>
                    <div class="navbar-text">
                        <a href="#" class="navbar-text-link">登入</a>
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
            open_nav: false,
            isLoading: false,
        }
    },
    methods: {
        openNav() {
            console.log('openNav');
            this.open_nav = true;
        }
    }

};
</script>
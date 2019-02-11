<template>
    <div>
        <footer>
            <div class="footer navbar">
                <img :src="`${baseUrl}/img/sub-logo.svg`" width="158" alt="">
                <div class="d-flex mb-5">
                    <div class="navbar-nav">
                        <a href="#" class="navbar-nav-link">商品列表</a>
                        <a href="#" class="navbar-nav-link">訂製服務</a>
                        <a href="#" class="navbar-nav-link">最新商品</a>
                    </div>
                    <div class="navbar-nav">
                        <a href="#" class="btn btn-dark mx-3">Facebook</a>
                        <a href="#" class="btn btn-dark mx-3">Instagram</a>
                        <a href="#" class="btn btn-dark mx-3">Shopee</a>
                    </div>
                    <div class="navbar-nav">
                        <small>Copyright © 2019, .</small>
                    </div>
                </div>
                <div class="text-center pt-4">
                    <h3 class="display-4">Join Us</h3>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    data() {
        return {
            baseUrl: process.env.VUE_APP_IMGURL,
        }
    }
};
</script>
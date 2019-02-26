<template>
    <div>
        <footer class="wrapper wrapper-top">
            <div class="footer">
                <img :src="`${baseUrl}/img/sub-logo.svg`" class="footer-logo" width="" alt="">
                <div class="footer-body">
                    <div class="footer-nav">
                        <a href="#" class="footer-nav-link">商品列表</a>
                        <a href="#" class="footer-nav-link">訂製服務</a>
                        <a href="#" class="footer-nav-link">最新商品</a>
                    </div>
                    <div class="footer-nav">
                        <a href="#" class="btn btn-dark footer-nav-btn">Facebook</a>
                        <a href="#" class="btn btn-dark footer-nav-btn">Instagram</a>
                        <a href="#" class="btn btn-dark footer-nav-btn">Shopee</a>
                    </div>
                    <div class="footer-nav">
                        <small>Copyright © 2019, .</small>
                    </div>
                </div>
                <!-- <div class="text-center pt-4">
                    <h3 class="display-4">Join Us</h3>
                </div> -->
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
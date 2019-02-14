<template>
    <div>
        <header>
            <nav class="navbar" :class="{ 'show' : open_nav }">
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
                        <a href="#" class="navbar-text-link d-none d-lg-block mr-0" data-toggle="modal" data-target="#memberModal">登入</a>
                        <a href="#" class="btn btn-block btn-outline-dark d-lg-none mb-3" data-toggle="modal"
                            data-target="#memberModal">登入</a>
                    </div>
                </div>
            </nav>
        </header>

        <!-- 會員登入 Modal -->
        <div class="modal fade" id="memberModal" tabindex="-1" role="dialog" aria-labelledby="memberModalTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content p-3">
                    <div class="p-3">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h5 class="modal-title display-3 text-center">會員登入</h5>
                    </div>
                    <div class="modal-body">
                        <div class="form-row">
                            <div class="form-group col-sm-3">
                                <label for="inputEmail1" class="col-form-label">信箱 Email</label>
                            </div>
                            <div class="form-group col-sm-9">
                                <input type="email" class="form-control" id="inputEmail1" aria-describedby="emailHelp"
                                    placeholder="請輸入會員信箱" disabled>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-sm-3">
                                <label for="inputPassword" class="col-form-label">密碼 Password</label>
                            </div>
                            <div class="col-sm-9">
                                <input type="password" class="form-control" id="inputPassword"
                                    placeholder="請輸入會員密碼" disabled>
                            </div>
                        </div>
                        <div class="mt-3">
                            <button type="buttom" class="btn btn-block btn-dark">登入</button>
                            <button type="buttom" class="btn btn-block btn-outline-dark">註冊</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                // 定义滚动条默认位置
                scrollTop: null,

                // 定义按钮默认状态
                isScrollTop: false
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll, true)
        },
        methods: {
            handleScroll(x) {
                let scrollTop =
                    document.documentElement.scrollTop;
                console.log(scrollTop);
            }
        },
        watch: {

        }
    };
    // $(window).scroll(function () {
    //                 const body = $('body');
    //                 const nav = $('#nav');
    //                 const img = $('nav img');

    //                 function makeItFixed(x) {
    //                     if ($(window).scrollTop() > x) {
    //                         nav.addClass('fixed-top');
    //                         img.attr('src', 'source/logo_black.png');
    //                         img.attr('width', '80');
    //                         body.css('padding-top', nav.outerHeight());
    //                     } else {
    //                         nav.removeClass('fixed-top');
    //                         body.css('padding-top', '0');
    //                         img.attr('src', 'source/logo_wite.png');
    //                         img.attr('width', '100');
    //                     }
    //                 }

    //                 if (nav.length > 0) {
    //                     makeItFixed(nav.length);
    //                 }
    //             });
</script>
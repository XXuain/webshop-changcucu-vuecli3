<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <header class="wrapper">
            <nav class="client-navbar client-navbar-fixed-top" :class="{ 'show' : openNav }">
                <div class="client-navbar-header">
                    <a href="#" class="client-navbar-mobil-btn" :class="{ 'open' : openNav }" @click="openNav = !openNav">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                    <div class="client-navbar-icon">
                        <a href="#" class="client-navbar-icon-link" @click="openNav = !openNav">
                            <img :src="`${baseUrl}/img/icon-ig.svg`" width="26" alt="">
                        </a>
                        <a href="#" class="client-navbar-icon-link" @click="openNav = !openNav">
                            <img :src="`${baseUrl}/img/icon-fb.svg`" width="26" alt="">
                        </a>
                    </div>
                    <router-link to="/client/home" class="client-navbar-logo">
                        <img :src="`${baseUrl}/img/logo.svg`" alt="" @click="openNav = !openNav">
                    </router-link>
                    <div class="client-navbar-car">
                        <button class="btn" data-toggle="modal" data-target="#cartModal">
                            <img :src="`${baseUrl}/img/icon-shopping-cart.svg`" width="26" alt="">
                        </button>
                    </div>
                </div>
                <div class="client-navbar-footer">
                    <div class="client-navbar-search">
                        <img :src="`${baseUrl}/img/icon-search.svg`" width="15" alt="" @click="openNav = !openNav">
                    </div>
                    <div class="client-navbar-nav">
                        <router-link to="/client/works" class="client-navbar-nav-link">
                            <span @click="openNav = !openNav">商品列表</span>
                        </router-link>
                        <a href="#" class="client-navbar-nav-link" @click.prevent="openNav = !openNav">訂製服務</a>
                        <a href="#" class="client-navbar-nav-link" data-toggle="modal"
                            data-target="#memberModal" @click="openNav = !openNav">會員登入</a>
                    </div>
                    <div class="client-navbar-text">
                        <a href="#" class="btn btn-block btn-outline-dark d-lg-none mb-3" data-toggle="modal"
                            data-target="#memberModal" @click="openNav = !openNav">會員登入</a>
                        <router-link to="/login" class="client-navbar-text-link d-none d-lg-block mr-0" @click="openNav = !openNav">後台登入</router-link>
                        <router-link to="/login" class="btn btn-block btn-outline-dark d-lg-none mb-3" @click="openNav = !openNav">後台登入</router-link>
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
                                <input type="password" class="form-control" id="inputPassword" placeholder="請輸入會員密碼"
                                    disabled>
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

        <!-- 購物車 Modal -->
        <div class="modal fade" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="cartModalTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content p-3">
                    <div class="p-3">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h5 class="modal-title display-3 text-center">購物車</h5>
                    </div>
                    <div class="modal-body">
                        <div v-if="cartData.carts && cartData.carts.length > 0">
                            <table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">品名</th>
                                        <th scope="col" width="60" class="text-right">數量</th>
                                        <th scope="col" width="100" class="text-right">金額</th>
                                        <th scope="col" width="60" class="text-center">刪除</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, key) in cartData.carts" :key="key">
                                        <td scope="row">{{ key + 1 }}</td>
                                        <td>{{ item.product.title }}</td>
                                        <td class="text-right">{{ item.qty }}</td>
                                        <td class="text-right">{{ item.final_total | currency }}</td>
                                        <td>
                                            <div class="btn icon-btn icon-btn-danger">
                                                <i class="fas fa-times" @click="removeCart(item.id)"></i>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="mt-3">
                                <button type="button" class="btn btn-block btn-dark" @click="goCkeck">結帳去</button>
                            </div>
                        </div>
                        <div class="bg-light text-center py-4" v-else>
                            <h6 class="display-4">購物車是空的!</h6>
                            <img :src="`${baseUrl}/img/icon-shopping-cart.svg`" width="100" alt="" class="mt-3">
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    /* eslint-disable */
    import $ from 'jquery';

    export default {
        // name: "userclient-navbar",
        data() {
            return {
                baseUrl: process.env.VUE_APP_IMGURL,

                // 樣式
                openNav: false,
                scrollTop: null, // 滾動調預設位置
                isScrollTop: false, // 按鈕預設狀態
            }
        },
        mounted() {
            // 監聽滾動事件
            // window.addEventListener('scroll', this.handleScroll, true)
        },
        methods: {
            // 滾動
            // handleScroll(x) {
            //     let scrollTop =
            //         document.documentElement.scrollTop;
            //     console.log(scrollTop);
            // },

            // 刪除購物車
            removeCart(id) {
                this.$store.dispatch('removeCart', id);
            },

            // 結帳去
            goCkeck() {
                this.$router.push('/client/check_out');
                $('#cartModal').modal('hide');
            }
        },
        computed: {
            cartData() {
                return this.$store.state.cartData;
            },
            isLoading() {
                return this.$store.state.isLoading;
            },
        },
        created() {
            this.$store.dispatch('getCart');
        },
    };
</script>
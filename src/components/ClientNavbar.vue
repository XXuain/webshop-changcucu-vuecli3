<template>
    <div>
        <header class="wrapper">
            <nav class="client-navbar client-navbar-fixed-top" :class="{ 'show' : openNav }">
                <div class="client-navbar-header">
                    <a href="#" class="client-navbar-mobil-btn" :class="{ 'open' : openNav }" @click="openNav = !openNav">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                    <div class="client-navbar-icon">
                        <a href="#" class="client-navbar-icon-link">
                            <img :src="`${baseUrl}/img/icon-ig.svg`" width="26" alt="">
                        </a>
                        <a href="#" class="client-navbar-icon-link">
                            <img :src="`${baseUrl}/img/icon-fb.svg`" width="26" alt="">
                        </a>
                    </div>
                    <router-link class="client-navbar-logo" to="home">
                        <img :src="`${baseUrl}/img/logo.svg`" alt="">
                    </router-link>
                    <div class="client-navbar-car">
                        <button class="btn" data-toggle="modal" data-target="#cartModal">
                            <img :src="`${baseUrl}/img/icon-shopping-cart.svg`" width="26" alt="">
                        </button>
                    </div>
                </div>
                <div class="client-navbar-footer">
                    <div class="client-navbar-search">
                        <img :src="`${baseUrl}/img/icon-search.svg`" width="15" alt="">
                    </div>
                    <div class="client-navbar-nav">
                        <router-link to="works" class="client-navbar-nav-link">商品列表</router-link>
                        <a href="#" class="client-navbar-nav-link">訂製服務</a>
                        <a href="#" class="client-navbar-nav-link">最新商品</a>
                    </div>
                    <div class="client-navbar-text">
                        <a href="#" class="client-navbar-text-link d-none d-lg-block mr-0" data-toggle="modal"
                            data-target="#memberModal">會員登入</a>
                        <a href="#" class="btn btn-block btn-outline-dark d-lg-none mb-3" data-toggle="modal"
                            data-target="#memberModal">會員登入</a>
                        <router-link to="/login" class="client-navbar-text-link d-none d-lg-block mr-0">後台登入</router-link>
                        <router-link to="/login" class="btn btn-block btn-outline-dark d-lg-none mb-3">後台登入</router-link>
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
                            <router-link to="check_out" class="btn btn-block btn-dark">結帳去</router-link>
                            <!-- <button type="buttom" class="btn btn-block btn-outline-dark">註冊</button> -->
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
        // name: "userclient-navbar",
        data() {
            return {
                baseUrl: process.env.VUE_APP_IMGURL,

                // 樣式
                openNav: false,

                // 滾動調預設位置
                scrollTop: null,

                // 按鈕預設狀態
                isScrollTop: false,

                // 購物車
                cartData: {},
            }
        },
        mounted() {
            // 監聽滾動事件
            // window.addEventListener('scroll', this.handleScroll, true)
        },
        methods: {
            // 滾動
            handleScroll(x) {
                let scrollTop =
                    document.documentElement.scrollTop;
                console.log(scrollTop);
            },
            // 取得購物車
            getCart() {
                const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
                const vm = this;
                // vm.isLoading = true;
                this.$http.get(api).then((res) => {
                    // console.log(res.data);
                    if (res.data.success) {
                        console.log('getCart');
                        // vm.isLoading = false;
                        vm.cartData = res.data.data;
                    }
                })
            },
            // 刪除購物車品項
            removeCart(id) {
                const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
                const vm = this;
                this.$http.delete(api).then((res) => {
                    // console.log(res.data);
                    if (res.data.success) {
                        vm.getCart();
                    }
                })
            },
        },
        created() {
            this.getCart();
        },
        watch: {

        }
    };
</script>
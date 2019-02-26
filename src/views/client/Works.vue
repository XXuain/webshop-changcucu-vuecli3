<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="container">
            <!-- nav -->
            <ul class="nav justify-content-center mb-3">
                <li class="nav-item item-filter mx-3">
                    <router-link to="works" class="nav-link active">全部<span>2</span></router-link>
                </li>
                <li class="nav-item item-filter mx-3">
                    <a class="nav-link" href="#">長夾<span>2</span></a>
                </li>
                <li class="nav-item item-filter mx-3">
                    <a class="nav-link" href="#">零錢包<span>2</span></a>
                </li>
                <li class="nav-item item-filter mx-3">
                    <a class="nav-link" href="#">隨身包<span>2</span></a>
                </li>
                <li class="nav-item item-filter mx-3">
                    <a class="nav-link" href="#">手提袋<span>2</span></a>
                </li>
                <li class="nav-item item-filter mx-3">
                    <!-- <a class="nav-link disabled" href="#">配件</a> -->
                    <a class="nav-link" href="#">配件<span>2</span></a>
                </li>
            </ul>

            <!-- work list -->
            <div class="portfolio-item-warp">
                <div class="portfolio-title">
                    <h2>Long wallets</h2>
                </div>

                <div class="row mb-4">
                    <div class="col-12 col-md-6" v-for="item in products" :key="item.id">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content content-between">
                                <div>
                                    <div class="portfolio-name">
                                        <router-link to="works_detail" class="display-4">{{ item.title }}</router-link>
                                    </div>
                                    <div class="portfolio-subname">
                                        <span>{{ item.description }}</span>
                                    </div>
                                    <div class="portfolio-price">
                                        <span class="light">{{ item.price }}</span>
                                    </div>
                                </div>
                                <button type="button" class="btn portfolio-add-to-cart" @click="addtoCart(item.id)"></button>
                            </div>
                            <img :src="`${ item.imageUrl }`" class="img-fluid" alt="">
                        </div>
                    </div>
                </div>
            </div>

            <!--<div class="portfolio-item-warp">
                <div class="portfolio-title">
                    <h2>Long wallets</h2>
                </div>

                <div class="row mb-4">
                    <div class="col-12 col-md">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content content-between">
                                <div>
                                    <div class="portfolio-name">
                                        <router-link to="works_detail" class="display-4">簡易長夾</router-link>
                                    </div>
                                    <div class="portfolio-subname">
                                        <span>[ LW-01 ]</span>
                                    </div>
                                    <div class="portfolio-price">
                                        <span class="light">NT$2,800</span>
                                    </div>
                                </div>
                                <button type="button" class="btn portfolio-add-to-cart" data-toggle="modal" data-target="#addtocartModal"></button>
                            </div>
                            <img :src="`${baseUrl}/img/Purses/LongWallets/LW-01-1.png`" class="img-fluid" alt="">
                        </div>
                    </div>
                    <div class="col-12 col-md">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content content-between">
                                <div>
                                    <div class="portfolio-name">
                                        <router-link to="works_detail" class="display-4">零錢包長夾</router-link>
                                    </div>
                                    <div class="portfolio-subname">
                                        <span>[ LW-02 ]</span>
                                    </div>
                                    <div class="portfolio-price">
                                        <span class="light">NT$2,800</span>
                                    </div>
                                </div>
                                <div class="portfolio-add-to-cart"></div>
                            </div>
                            <img :src="`${baseUrl}/img/Purses/LongWallets/LW-02-8.png`" class="img-fluid" alt="">
                        </div>
                    </div>
                </div>
            </div>

            <div class="portfolio-item-warp">
                <div class="portfolio-title">
                    <h2>Coin purse</h2>
                </div>

                <div class="row mb-4">
                    <div class="col-12 col-md">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content content-between">
                                <div>
                                    <div class="portfolio-name">
                                        <router-link to="works_detail" class="display-4">簡易長夾</router-link>
                                    </div>
                                    <div class="portfolio-subname">
                                        <span>[ LW-01 ]</span>
                                    </div>
                                    <div class="portfolio-price">
                                        <span class="light">NT$2,800</span>
                                    </div>
                                </div>
                                <div class="portfolio-add-to-cart"></div>
                            </div>
                            <img :src="`${baseUrl}/img/Purses/CoinPurse/CP-01-1.png`" class="img-fluid" alt="">
                        </div>
                    </div>
                    <div class="col-12 col-md">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content content-between">
                                <div>
                                    <div class="portfolio-name">
                                        <a href="#" class="display-4">零錢包長夾</a>
                                    </div>
                                    <div class="portfolio-subname">
                                        <span>[ LW-02 ]</span>
                                    </div>
                                    <div class="portfolio-price">
                                        <span class="light">NT$2,800</span>
                                    </div>
                                </div>
                                <div class="portfolio-add-to-cart"></div>
                            </div>
                            <img :src="`${baseUrl}/img/Purses/CoinPurse/CP-02-2.png`" class="img-fluid" alt="">
                        </div>
                    </div>
                </div>
            </div> -->
        </div>

        <!-- 加入購物車 Modal -->
        <!-- <div class="modal fade" id="addtocartModal" tabindex="-1" role="dialog" aria-labelledby="addtocartModalTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content p-3">
                    <div class="p-3">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h5 class="modal-title display-3 text-center">加入購物車</h5>
                    </div>
                    <div class="modal-body">
                        <div class="">
                            <button type="buttom" class="btn btn-block btn-dark">登入</button>
                            <button type="buttom" class="btn btn-block btn-outline-dark">註冊</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
    /* eslint-disable */

    export default {
        name: "works",
        data() {
            return {
                baseUrl: process.env.VUE_APP_IMGURL,
                isLoading: false,
                products: {},
            }
        },
        methods: {
            getProducts(page = 1) {
                const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
                const vm = this;
                vm.isLoading = true;
                this.$http.get(api).then((res) => {
                    console.log(res.data);
                    if (res.data.success) {
                        vm.isLoading = false;
                        vm.products = res.data.products;
                        let products_data = {};
                        
                        res.data.products.forEach(element => {
                            products_data[element.category] = element;
                        });
                        console.log(products_data);
                        // vm.pagination = res.data.pagination;
                    }
                })
            },

            addtoCart(id, qty = 1) {
                console.log('++');
                const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
                const vm = this;
                const cart = {
                    'product_id': id,
                    qty
                };
                // vm.status.loadingItem = id;
                this.$http.post(api, {
                    data: cart
                }).then((res) => {
                    console.log(res.data);
                    if (res.data.success) {
                        console.log('成功加入購物車');
                        // vm.status.loadingItem = '';
                        // vm.getCart();
                        // $('#productModal').modal('hide');
                    }
                })
            },
        },
        created() {
            this.getProducts();
            // this.getCart();
        }
    };
</script>
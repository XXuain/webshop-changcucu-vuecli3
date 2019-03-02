<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="container">
            <!-- nav -->
            <ul class="nav justify-content-center my-3">
                <li class="nav-item item-filter mx-3">
                    <a class="nav-link" href="#" :class="{ 'active' : navItem == 'All' }" @click.prevent="navItem = 'All'">全部<span>2</span></a>
                </li>
                <li class="nav-item item-filter mx-3" v-for="(num, key) in countCategory" :key="key">
                    <a class="nav-link" href="#" :class="{ 'active' : navItem == key }" @click.prevent="navItem = key">{{ CategoryName[key] }}<span>{{ num }}</span></a>
                </li>
            </ul>

            <!-- work list -->
            <div class="portfolio-item-warp">
                <div class="row mb-4">
                    <div class="col-12 col-md-6 mb-4" v-for="(item, key) in productsDataFillter" :key="key">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content content-between">
                                <div>
                                    <div class="portfolio-name">
                                        <router-link :to="{ name: 'WorksDetail', params: { productId: item.id }}"
                                            class="display-3">{{ item.title }}
                                        </router-link>
                                    </div>
                                    <div class="portfolio-subname">
                                        <span>{{ item.description }}</span>
                                    </div>
                                    <div class="portfolio-price">
                                        <span class="light">{{ item.price | currency }}</span>
                                    </div>
                                </div>
                                <button type="button" class="btn portfolio-add-to-cart" @click="addtoCart(item.id)"></button>
                            </div>
                            <img :src="`${ item.imageUrl }`" class="img-fluid" alt="">
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
        name: "works",
        data() {
            return {
                baseUrl: process.env.VUE_APP_IMGURL,
                isLoading: false,
                navItem: 'All',
                CategoryName: {
                    CarryBag:'隨身包',
                    CoinPurse:'零錢包',
                    LongWallets:'長夾',
                    WatchBand:'錶帶',
                },

                // 產品
                productsData: [],
                countCategory: [],
                pagination: {},
            }
        },
        methods: {
            getProducts(page = 1) {
                const api =
                    `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
                const vm = this;
                vm.isLoading = true;
                this.$http.get(api).then((res) => {

                    if (res.data.success) {
                        vm.isLoading = false;

                        vm.productsData = res.data.products;
                        vm.pagination = res.data.pagination;
                        
                        var cate_count= [];

                        vm.countCategory = vm.productsData.reduce(function (prev, item) {
                            prev[item.category] = prev[item.category] || [];

                            if(prev[item.category] == []){
                                prev[item.category] = 0;
                            }
                            prev[item.category] ++;
                            return prev;
                        }, {});
                    }
                })
            },

            addtoCart(id, qty = 1) {
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
                    if (res.data.success) {
                        console.log('成功加入購物車');
                        this.$bus.$emit('messsage:push', res.data.message, 'dark');
                    }
                })
            },
        },
        computed: {
            productsDataFillter() {
                const vm = this;
                if (vm.navItem == 'All') {
                    return vm.productsData;
                } else if (vm.navItem == 'LongWallets') {
                    return vm.productsData.filter(item => item.category == vm.navItem);

                } else if (vm.navItem == 'CoinPurse') {
                    return vm.productsData.filter(item => item.category == vm.navItem);
                    // let newData = [];
                    // vm.productsData.forEach(element => {
                    //     if(element.category == vm.navItem) {
                    //         newData.push(element);
                    //     }
                    // });
                    // console.log(newData);
                    // return newData;
                } else if (vm.navItem == 'CarryBag') {
                    return vm.productsData.filter(item => item.category == vm.navItem);
                } else if (vm.navItem == 'WatchBand') {
                    return vm.productsData.filter(item => item.category == vm.navItem);
                }
                return [];
            }
        },
        created() {
            this.getProducts();
            // this.getCart();
        }
    };
</script>
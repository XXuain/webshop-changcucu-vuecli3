<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="container">
            <!-- nav -->
            <ul class="nav justify-content-center flex-row-reverse my-3">
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
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: "works",
        data() {
            return {
                baseUrl: process.env.VUE_APP_IMGURL,
                navItem: 'All',
            }
        },
        methods: {
            addtoCart(id, qty = 1) {
                this.$store.dispatch('addtoCart', { id, qty });
            },

            ...mapActions(['getProducts'])
        },
        computed: {
            ...mapGetters(['isLoading', 'productsData', 'countCategory', 'CategoryName', 'pagination']),
            productsDataFillter() {
                const vm = this;
                if (vm.navItem == 'All') {
                    return vm.$store.state.productsData;
                } else if (vm.navItem == 'LongWallets') {
                    return vm.$store.state.productsData.filter(item => item.category == vm.navItem);
                } else if (vm.navItem == 'CoinPurse') {
                    return vm.$store.state.productsData.filter(item => item.category == vm.navItem);
                } else if (vm.navItem == 'CarryBag') {
                    return vm.$store.state.productsData.filter(item => item.category == vm.navItem);
                } else if (vm.navItem == 'WatchBand') {
                    return vm.$store.state.productsData.filter(item => item.category == vm.navItem);
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
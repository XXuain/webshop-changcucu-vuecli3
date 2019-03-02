<template>
    <div>
        <div class="container">
            
            <!-- work list -->
            <div class="portfolio-item-warp">
                <div class="portfolio-title">
                    <h2>{{ product.category }}</h2>
                </div>

                <div class="row mb-4">
                    <div class="col-12 col-md-7">
                        <img :src="`${ product.imageUrl }`" class="img-fluid" alt="">
                        <!-- <img :src="`${baseUrl}/img/Purses/LongWallets/LW-02-8.png`" class="img-fluid" alt=""> -->
                    </div>
                    <div class="col-12 col-md-5 align-self-center">
                        <div class="d-flex align-items-end mb-5">
                            <h1 class="display-3 mb-0 mr-2">{{ product.title }}</h1>
                            <span class="text-secondary">{{ product.description }}</span>
                        </div>
                        <!-- <div class="d-flex mb-5">
                            <span class="border p-1">訂製物</span>
                        </div> -->
                        <div class="portfolio-price mb-3">
                            <span class="dark">{{ product.price | currency }}</span>
                            <!-- <span class="oringin-price">NT$4,800</span> -->
                        </div>
                        <div class="form-row">
                            <div class="col-4 pr-0">
                                <div class="input-group input-group-sm border border-dark h-100">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-outline-dark border-0" type="button">-</button>
                                    </div>
                                    <input type="text" class="form-control h-100 border-0 text-center" placeholder="" aria-label="" aria-describedby="basic-addon1">
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-dark border-0" type="button">+</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col pl-0">
                                <button class="btn btn-dark h-100" @click="addtoCart">加入購物車</button>
                            </div>
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
        data() {
            return {
                baseUrl: process.env.VUE_APP_IMGURL,
                isLoading: false,
                productId: '',
                product: {}
            }
        },
        methods: {
            // 取得細項
            getProductDetail() {
                const vm = this;
                const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${vm.productId}`;
                vm.isLoading = true;
                this.$http.get(api).then((res) => {
                    // console.log(res.data);
                    if (res.data.success) {
                        vm.product = res.data.product;
                    }
                })
            },
            // 加入購物車
            addtoCart(qty = 1) {
                const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
                const vm = this;
                const cart = {
                    'product_id': vm.product.id,
                    qty
                };
                // vm.status.loadingItem = id;
                this.$http.post(api, {
                    data: cart
                }).then((res) => {
                    if (res.data.success) {
                        console.log('成功加入購物車');
                        // this.$bus.$emit('messsage:push', res.data.message, 'dark');
                    }
                })
            },
        },
        created() {
            this.productId = this.$route.params.productId;
            this.getProductDetail();
        }
    };
</script>
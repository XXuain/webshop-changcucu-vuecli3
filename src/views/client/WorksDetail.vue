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
                    </div>
                    <div class="col-12 col-md-5 align-self-center mt-4 mt-md-0">
                        <div class="d-flex align-items-end mb-3 mb-md-5">
                            <h1 class="display-3 mb-0 mr-2">{{ product.title }}</h1>
                            <span class="text-secondary">{{ product.description }}</span>
                        </div>
                        <div class="portfolio-price mb-3">
                            <span class="dark">{{ product.price | currency }}</span>
                        </div>
                        <div class="form-row">
                            <div class="col-4 pr-0">
                                <div class="input-group input-group-sm border border-dark h-100">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-outline-dark border-0" type="button" @click="qtyCounter(0)">-</button>
                                    </div>
                                    <input type="text" class="form-control h-100 border-0 text-center" :value="product.qty">
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-dark border-0" type="button" @click="qtyCounter(1)">+</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col pl-0">
                                <button class="btn btn-block btn-dark h-100" @click="addtoCart">加入購物車</button>
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
                product: {},
            }
        },
        methods: {
            // 取得細項
            getProductDetail() {
                const vm = this;
                const api =
                    `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${vm.productId}`;
                vm.isLoading = true;
                this.$http.get(api).then((res) => {
                    console.log(res.data.product);
                    if (res.data.success) {
                        vm.product = res.data.product;
                        vm.$set(vm.product, 'qty', 1);
                    }
                })
            },
            // 加入購物車
            addtoCart(qty = 1) {
                const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
                const vm = this;
                const cart = {
                    'product_id': vm.product.id,
                    'qty': vm.product.qty
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
            // 選擇數量
            qtyCounter(status) {
                const vm = this;
                if (status == 0 && vm.product.qty >= 2) {
                    vm.product.qty -= 1;
                } else if (status == 1) {
                    vm.product.qty += 1
                }
            },
        },
        created() {
            this.productId = this.$route.params.productId;
            this.getProductDetail();
        }
    };
</script>
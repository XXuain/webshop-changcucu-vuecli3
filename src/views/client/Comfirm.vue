<template>
    <div>
        <div class="container">
            <div class="shopping-car my-5">
                <!-- 購物車 -->
                <div class="row heading heading-2">
                    <div class="col-12">
                        <p class="display-4 subheading">確認訂單</p>
                    </div>
                    <div class="col-12">
                        <h2 class="h2 EN-font-family">COMFIRM ORDER</h2>
                    </div>
                </div>

                <!-- 購買清單 -->
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" width="120">圖示</th>
                            <th scope="col">品名</th>
                            <th scope="col" width="100" class="text-right">數量</th>
                            <th scope="col" width="60" class="text-right">金額</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, key) in orderData.products" :key="key">
                            <td scope="row">
                                <img :src="`${ item.product.imageUrl }`" class="img-fluid" alt="">
                            </td>
                            <td>
                                <h1 class="display-3">{{ item.product.title }}</h1>
                                <span class="text-secondary">{{ item.product.description }}</span>
                            </td>
                            <td>
                                <div class="input-group input-group-sm border border-dark h-100">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-outline-dark border-0" type="button">-</button>
                                    </div>
                                    <input type="text" class="form-control border-0 text-center" placeholder=""
                                        aria-label="" aria-describedby="basic-addon1" :value="`${ item.qty }`">
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-dark border-0" type="button">+</button>
                                    </div>
                                </div>
                            </td>
                            <td align="right">
                                <div class="portfolio-price mb-3">
                                    <span class="dark">{{ item.product.price | currency }}</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colspan="2">總計</td>
                            <td align="right">
                                <div class="portfolio-price mb-3">
                                    <!-- <span class="text-danger" v-if="orderData.final_total !== orderData.total">{{
                                        orderData.final_total | currency }}</span> -->
                                    <span class="text-danger">{{ orderData.total | currency }}</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- 客戶資訊 -->
            <div class="customer-information">
                <div class="row heading heading-2">
                    <div class="col-12">
                        <p class="display-4 subheading">客戶資訊</p>
                    </div>
                    <div class="col-12">
                        <h2 class="h2 EN-font-family">INFORMATION</h2>
                    </div>
                </div>

                <!-- 表單 -->
                
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

                // 訂單資訊
                orderData: {}
            }
        },
        methods: {
            // 取得訂單
            getOrder(order_id) {
                const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${order_id}`;
                const vm = this;
                vm.isLoading = true;
                this.$http.get(api).then((res) => {
                    // console.log(res.data);
                    if (res.data.success) {
                        console.log('getOrder:', res.data);
                        vm.isLoading = false;
                        vm.orderData = res.data.order;
                    }
                })

            }
        },
        created() {
            this.getOrder('-LZmy_QCztOCr-4sqiJt');
        }
    }
</script>
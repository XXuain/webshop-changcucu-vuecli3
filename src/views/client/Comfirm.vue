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

                <!-- 客戶資訊 表單 -->
                <dl class="row" v-if="orderData.user">
                    <dt class="col-sm-3">姓名 Name</dt>
                    <dd class="col-sm-9">{{ orderData.user.name }}</dd>

                    <dt class="col-sm-3">電話 Phone</dt>
                    <dd class="col-sm-9">{{ orderData.user.tel }}</dd>

                    <dt class="col-sm-3">信箱 Email</dt>
                    <dd class="col-sm-9">{{ orderData.user.email }}</dd>

                    <dt class="col-sm-3">地址 Address</dt>
                    <dd class="col-sm-9">{{ orderData.user.address }}</dd>

                    <dt class="col-sm-3">留言 Message</dt>
                    <dd class="col-sm-9">{{ orderData.user.message }}</dd>

                    <dt class="col-sm-3">付款狀態 Payment</dt>
                    <dd class="col-sm-9">
                        <span class="text-success" v-if="orderData.is_paid"><i class="fas fa-check mr-1"></i>已付款</span>
                        <span class="text-danger" v-else><i class="far fa-circle mr-1"></i>未付款</span>
                    </dd>
                </dl>
                <div class="text-center" v-if="!orderData.is_paid">
                    <button class="btn btn-block btn-dark px-5" @click="payOrder">結帳去</button>
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
                orderId: '',

                // 訂單資訊
                orderData: {},
            }
        },
        methods: {
            // 取得訂單
            getOrder() {
                const vm = this;
                const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`;
                vm.isLoading = true;
                this.$http.get(api).then((res) => {
                    // console.log(res.data);
                    if (res.data.success) {
                        console.log('getOrder:', res.data);
                        vm.isLoading = false;
                        vm.orderData = res.data.order;
                    }
                })

            },
            // 結帳付款
            payOrder() {
                const vm = this;
                const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`;
                vm.isLoading = true;
                this.$http.post(api).then((res) => {
                    if (res.data.success) {
                        vm.isLoading = false;
                        vm.getOrder();
                    }
                    console.log('付款失敗');
                })
            }
        },
        created() {
            this.orderId = this.$route.params.orderId
            this.getOrder();
        }
    }
</script>
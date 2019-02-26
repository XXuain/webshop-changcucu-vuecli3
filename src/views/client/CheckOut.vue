<template>
    <div>
        <div class="container">
            <div class="shopping-car mb-5">
                <!-- 購物車 -->
                <div class="row heading heading-2">
                    <div class="col-12">
                        <p class="display-4 subheading">購物車</p>
                    </div>
                    <div class="col-12">
                        <h2 class="h2 EN-font-family">SHOPPING CART</h2>
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
                            <th scope="col" width="60" class="text-center">刪除</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, key) in cartData.carts" :key="key">
                            <td scope="row">
                                <!-- <img :src="`${baseUrl}/img/Purses/LongWallets/LW-01-1.png`" class="img-fluid" alt=""> -->
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
                            <td>
                                <div class="btn icon-btn icon-btn-danger">
                                    <i class="fas fa-times" @click="removeCart(item.id)"></i>
                                </div>
                            </td>
                        </tr>

                        <!-- 折價券 -->
                        <tr>
                            <td>使用折價券</td>
                            <td colspan="2">
                                <div class="input-group input-group-sm">
                                    <input type="text" class="form-control" placeholder="請輸入折價券號碼" aria-label="Recipient's username"
                                        aria-describedby="basic-addon2">
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-dark" type="button" @click="addCouponCode">套用優惠碼</button>
                                    </div>
                                </div>
                            </td>
                            <td align="right">
                                <div class="portfolio-price mb-3" v-if="cartData.final_total !== cartData.total">
                                    <span class="dark">{{ cartData.final_total }}</span>
                                </div>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colspan="3">總計</td>
                            <td align="right">
                                <div class="portfolio-price mb-3">
                                    <span class="dark">{{ cartData.total | currency }}</span>
                                    <!-- <span class="oringin-price">NT$4,800</span> -->
                                </div>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="customer-information">
                <!-- 客戶資訊 -->
                <div class="row heading heading-2">
                    <div class="col-12">
                        <p class="display-4 subheading">客戶資訊</p>
                    </div>
                    <div class="col-12">
                        <h2 class="h2 EN-font-family">INFORMATION</h2>
                    </div>
                </div>
                
                <!-- 表單 -->
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">姓名 Name</label>
                            <input type="text" class="form-control" id="inputEmail4" placeholder="請輸入姓名">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPhone">電話 Phone</label>
                            <input type="text" class="form-control" id="inputPhone" placeholder="請輸入電話">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">信箱 Email</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder="請輸入信箱">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4">密碼 Password</label>
                            <input type="password" class="form-control" id="inputPassword4" placeholder="請輸入密碼">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">地址 Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="請輸入地址">
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck">
                            <label class="form-check-label" for="gridCheck">
                                收到相關資訊
                            </label>
                        </div>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-dark px-5">送出</button>
                    </div>
                </form>
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

                // 購物車
                cartData: {},
            }
        },
        methods: {
            // 取得購物車
            getCart() {
                const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
                const vm = this;
                vm.isLoading = true;
                this.$http.get(api).then((res) => {
                    // console.log(res.data);
                    if (res.data.success) {
                        console.log('getCart');
                        vm.isLoading = false;
                        vm.cartData = res.data.data;
                    }
                })
            },
            // 刪除購物車
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

            // 套用優惠碼
            addCouponCode() {
                const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
                const vm = this;
                this.$http.post(api, {
                    data: {
                        code: vm.coupon_code
                    }
                }).then((res) => {
                    console.log('優惠券狀態', res.data);
                    if (res.data.success) {
                        vm.getCart();
                    }
                })
            },
        },
        created() {
            this.getCart();
        }
    }
</script>
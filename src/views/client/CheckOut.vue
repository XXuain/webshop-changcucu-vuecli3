<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="container">
            <div class="shopping-car my-5">
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
                <table class="table" v-if="cartData.carts && cartData.carts.length > 0">
                    <thead>
                        <tr>
                            <th scope="col" width="60" class="text-center">刪除</th>
                            <th scope="col" width="120">圖示</th>
                            <th scope="col">品名</th>
                            <th scope="col" width="100" class="text-right">數量</th>
                            <th scope="col" width="60" class="text-right">金額</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, key) in cartData.carts" :key="key">
                            <td>
                                <div class="btn icon-btn icon-btn-danger">
                                    <i class="fas fa-times" @click="removeCart(item.id)"></i>
                                </div>
                            </td>
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
                        <!-- 折價券 -->
                        <tr>
                            <td></td>
                            <td>使用折價券</td>
                            <td colspan="2">
                                <div class="input-group input-group-sm">
                                    <input type="text" class="form-control" placeholder="請輸入折價券號碼" v-model="coupon_code">
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-dark" type="button" @click="addCouponCode">套用</button>
                                    </div>
                                </div>
                            </td>
                            <td align="right">
                                <div class="portfolio-price mb-3">
                                    <span class="text-danger" v-if="cartData.final_total !== cartData.total">- {{
                                        cartData.total - cartData.final_total | currency }}</span>
                                    <span class="text-danger" v-else>- 0</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colspan="3">總計</td>
                            <td align="right">
                                <div class="portfolio-price mb-3">
                                    <span class="text-danger" v-if="cartData.final_total !== cartData.total">{{
                                        cartData.final_total | currency }}</span>
                                    <span class="text-danger" v-else>{{ cartData.total | currency }}</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="bg-light text-center py-5" v-else>
                    <h6 class="display-4">購物車是空的!</h6>
                    <img :src="`${baseUrl}/img/icon-shopping-cart.svg`" width="100" alt="" class="mt-3">
                </div>
            </div>

            <!-- 客戶資訊 -->
            <div class="customer-information" v-if="cartData.carts">
                <div class="row heading heading-2">
                    <div class="col-12">
                        <p class="display-4 subheading">客戶資訊</p>
                    </div>
                    <div class="col-12">
                        <h2 class="h2 EN-font-family">INFORMATION</h2>
                    </div>
                </div>

                <!-- 表單 -->
                <form @submit.prevent="createOrder">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="username">姓名 Name</label>
                            <input type="text" class="form-control" id="username" name="name" placeholder="請輸入姓名"
                                v-model="form.user.name"
                                v-validate="'required'"
                                :class="{'is-invalid' : errors.has('name') }">
                            <span class="text-danger" v-if="errors.has('name')">必須輸入姓名</span>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="usertel">電話 Phone</label>
                            <input type="text" class="form-control" id="usertel" name="tel" placeholder="請輸入電話"
                                v-model="form.user.tel">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="useremail">信箱 Email</label>
                            <input type="email" class="form-control" id="useremail" placeholder="請輸入信箱" name="email"
                                v-model="form.user.email"
                                v-validate="'required|email'"
                                :class="{'is-invalid' : errors.has('email') }">
                            <span class="text-danger">{{ errors.first('email') }}</span>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="userpassword">會員密碼 Password</label>
                            <input type="password" class="form-control" id="userpassword" placeholder="請輸入密碼" disabled>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="useraddress">地址 Address</label>
                        <input type="text" class="form-control" id="useraddress" placeholder="請輸入地址" name="address"
                            v-model="form.user.address">
                    </div>
                    <div class="form-group">
                        <label for="usermsg">留言</label>
                        <textarea name="msg" id="usermsg" class="form-control" cols="30" rows="2"
                            v-model="form.message"></textarea>
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
                        <button class="btn btn-dark px-5">建立訂單</button>
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
                coupon_code: '',

                // 客戶資訊
                form: {
                    "user": {
                        "name": "",
                        "email": "",
                        "tel": "",
                        "address": ""
                    },
                    message: ""
                },

                isLoading: false,
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
            // 建立訂單
            createOrder() {
                const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
                const vm = this;
                const order = vm.form;
                vm.isLoading = true;
                this.$validator.validate().then((result) => {
                    if (result) {
                        this.$http.post(api, {
                            data: order
                        }).then((res) => {
                            if (res.data.success) {
                                console.log('訂單已成立', res.data);
                                vm.$router.push(`/comfirm/${res.data.orderId}`);
                            } else {
                                console.log('錯誤：', res.data.message);
                            }
                            vm.isLoading = false;
                            vm.getCart();
                        })
                    } else {
                        console.log('欄位不完整');
                    }
                })
            },
        },
        created() {
            this.getCart();
        }
    }
</script>
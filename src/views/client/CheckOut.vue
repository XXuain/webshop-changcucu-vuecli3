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
                            <th scope="col">圖示</th>
                            <th scope="col">名稱</th>
                            <th scope="col">數量</th>
                            <th scope="col">價錢</th>
                            <th scope="col">刪除</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                <img :src="`${baseUrl}/img/Purses/LongWallets/LW-01-1.png`" height="110" alt="">
                            </th>
                            <td>
                                <h1 class="display-3">簡易長夾</h1>
                                <span class="text-secondary">[ LW-01 ]</span>
                            </td>
                            <td>
                                <div class="input-group input-group-sm border border-dark h-100">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-outline-dark border-0" type="button">-</button>
                                    </div>
                                    <input type="text" class="form-control h-100 border-0 text-center" placeholder=""
                                        aria-label="" aria-describedby="basic-addon1">
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-dark border-0" type="button">+</button>
                                    </div>
                                </div>
                            </td>
                            <td align="right">
                                <div class="portfolio-price mb-3">
                                    <span class="dark">NT$2,800</span>
                                    <!-- <span class="oringin-price">NT$4,800</span> -->
                                </div>
                            </td>
                            <td>X</td>
                        </tr>
                        <!-- 折價券 -->
                        <tr>
                            <td colspan="2">使用折價券</td>
                            <td>
                                <div class="input-group input-group-sm">
                                    <input type="text" class="form-control" placeholder="請輸入折價券號碼" aria-label="Recipient's username"
                                        aria-describedby="basic-addon2">
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-dark" type="button">確認使用</button>
                                    </div>
                                </div>
                            </td>
                            <td align="right">
                                <div class="portfolio-price mb-3">
                                    <span class="dark">NT$2,800</span>
                                    <!-- <span class="oringin-price">NT$4,800</span> -->
                                </div>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colspan="3">總計</td>
                            <td align="right">
                                <div class="portfolio-price mb-3">
                                    <span class="dark">NT$2,800</span>
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
            }
        },
    }
</script>
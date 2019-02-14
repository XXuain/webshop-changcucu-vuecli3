<template>
    <div>
        <div class="container">
            
            <!-- work list -->
            <div class="portfolio-item-warp">
                <div class="portfolio-title">
                    <h2>Long wallets</h2>
                </div>

                <div class="row mb-4">
                    <div class="col-12 col-md-7">
                        <img :src="`${baseUrl}/img/Purses/LongWallets/LW-02-8.png`" class="img-fluid" alt="">
                    </div>
                    <div class="col-12 col-md-5 align-self-center">
                        <div class="d-flex align-items-end mb-3">
                            <h1 class="display-3 mb-0 mr-2">簡易長夾</h1>
                            <span class="text-secondary">[ LW-01 ]</span>
                        </div>
                        <div class="d-flex mb-5">
                            <span class="border p-1">訂製物</span>
                        </div>
                        <!-- <button class="btn btn-sm btn-outline-secondary">訂製物</button> -->
                        <div class="portfolio-price mb-3">
                            <span class="dark">NT$2,800</span>
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
                                <button class="btn btn-dark h-100">加入購物車</button>
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
            }
        }
    };
</script>
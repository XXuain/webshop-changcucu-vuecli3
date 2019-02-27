<template>
    <div>
        <loading :active.sync="isLoading"></loading>

        <div class="text-right mt-3">
            <button class="btn btn-dark" @click="openModal(true)"><i class="fas fa-plus mr-1"></i>建立優惠券</button>
        </div>
        <table class="table mt-4">
            <thead>
                <tr>
                    <th>#</th>
                    <th width="120">名稱</th>
                    <th class="text-right">折扣碼</th>
                    <th class="text-right">折扣%</th>
                    <th width="120" class="text-center">到期日</th>
                    <th class="text-center">是否啟用</th>
                    <th width="100" class="text-center">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, key) in coupons" :key="key">
                    <td>{{ key + 1 }}</td>
                    <td>{{ item.title }}</td>
                    <td class="text-right">{{ item.code }}</td>
                    <td class="text-right">{{ item.percent }}</td>
                    <td class="text-right">{{ item.due_date }}</td>
                    <td class="text-center">
                        <span v-if="item.is_enabled == 1" class="text-success"><i class="fas fa-check"></i></span>
                        <span v-else class="text-secondary"><i class="fas fa-ban"></i></span>
                    </td>
                    <!-- <td>
                        <button class="btn btn-sm btn-outline-primary" @click="openModal(false, item)">編輯</button>
                        <button class="btn btn-sm btn-outline-primary" @click="deleteCoupon(item)">刪除</button>
                    </td> -->
                    <td class="text-center">
                        <div class="btn icon-btn icon-btn-dark">
                            <i class="fas fa-pencil-alt" @click="openModal(false, item)"></i>
                        </div>
                        <div class="btn icon-btn icon-btn-danger">
                            <i class="fas fa-times" @click="deleteCoupon(item.id)"></i>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        <!--  props 傳入資料 ／ @ 觸發事件 ／ v-if 避免data未完成出錯 -->
        <Pagination :props-pagiation="pagination" @getPage="getCoupons" v-if="pagination"></Pagination>

        <!-- 新增 編輯 Modal -->
        <div class="modal fade" id="couponModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-dark text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                            <span>新增優惠券</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="title">名稱</label>
                                <input type="text" class="form-control" id="title" placeholder="請輸入名稱" v-model="tempCoupon.title">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="code">折扣碼</label>
                                <input type="unit" class="form-control" id="code" placeholder="請輸入折扣碼" v-model="tempCoupon.code">
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="percent">折扣百分比</label>
                                <input type="number" class="form-control" id="percent" placeholder="請輸入折扣百分比" v-model="tempCoupon.percent">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="due_date">到期日</label>
                                <input type="text" class="form-control" id="due_date" placeholder="請輸入到期日" value=""
                                    v-model="tempCoupon.due_date">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="is_enabled" v-model="tempCoupon.is_enabled"
                                    :true-value="1" :false-value="0">
                                <label class="form-check-label" for="is_enabled">
                                    是否啟用
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary" @click="updateCoupon(tempCoupon.id)">確認</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    import $ from 'jquery';
    import Pagination from "@/components/Pagination.vue";

    export default {
        data() {
            return {
                coupons: [],
                tempCoupon: {
                    // "title": "超級特惠價格",
                    // "code": "testCode"
                    // "percent": 80,
                    // "due_date": 6547658,
                    // "is_enabled": 1,
                },
                pagination: {},
                isLoading: false,
                isNew: false
            }
        },
        components: {
            Pagination
        },
        methods: {
            getCoupons(page = 1) {
                const api =
                    `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`;
                const vm = this;
                vm.isLoading = true;
                this.$http.get(api).then((res) => {
                    // console.log(res.data);
                    if (res.data.success) {
                        vm.isLoading = false;
                        vm.coupons = res.data.coupons;
                    }
                })
            },
            openModal(isNew, item) {
                const vm = this;
                // 編輯
                if (!isNew) {
                    vm.tempCoupon = item;
                    vm.isNew = false;

                // 新增
                } else {
                    vm.tempCoupon = {};
                    vm.isNew = true;
                }
                $('#couponModel').modal('show');
            },

            // 新增 編輯 折價券
            updateCoupon(id) {
                let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`;
                let metods = 'post';
                const vm = this;
                vm.isLoading = true;

                // 編輯
                if (!vm.isNew) {
                    api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${id}`;
                    metods = 'put';
                }

                this.$http[metods](api, {
                    data: vm.tempCoupon
                }).then((res) => {
                    console.log(res.data);
                    if (res.data.success) {
                        $('#couponModel').modal('hide');
                        vm.isLoading = false;
                        vm.getCoupons();
                    }
                })
            },
            deleteCoupon(coupon_id) {
                const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${coupon_id}`;
                const vm = this;
                vm.isLoading = true;
                this.$http.delete(api).then((res) => {
                    if (res.data.success) {
                        vm.isLoading = false;
                        vm.getCoupons();
                    }
                })
            }
        },
        created() {
            this.getCoupons();
        }
    }
</script>
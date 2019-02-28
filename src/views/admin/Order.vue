<template>
    <div>
        <loading :active.sync="isLoading"></loading>

        <!-- <div class="text-right mt-3">
            <button class="btn btn-outline-primary" @click="openModal('new')">建立新的產品</button>
        </div> -->
        <table class="table mt-4">
            <thead>
                <tr>
                    <th>#</th>
                    <th width="120">購買時間</th>
                    <th>訂單編號</th>
                    <th>Email</th>
                    <th width="80">應付金額</th>
                    <th width="30" class="text-center">是否付款</th>
                    <th width="80" class="text-center">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, key) in ordersData" :key="key">
                    <td>{{ key + 1 }}</td>
                    <td>{{ item.create_at | date }}</td>
                    <td>{{ item.id }}</td>
                    <td>
                        <div v-if="item.user">
                            {{ item.user.email }}
                        </div>
                        <div v-else>no information</div>
                    </td>
                    <!-- <td class="text-right">
                        <ul>
                            <li v-for="(product, key) in item.products" :key="key">
                                {{ product.product_id }}
                            </li>
                        </ul>
                    </td> -->
                    <td class="text-right">{{ item.total | currency }}</td>
                    <td class="text-center">
                        <span class="text-success" v-if="item.is_paid"><i class="fas fa-check mr-1"></i>已付款</span>
                        <span class="text-danger" v-else><i class="fas fa-times mr-1"></i>未付款</span>
                    <td>
                        <div class="btn icon-btn icon-btn-dark">
                            <i class="fas fa-pencil-alt" @click="openModal(item)"></i>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        <!--  props 傳入資料 ／ @ 觸發事件 ／ v-if 避免data未完成出錯 -->
        <Pagination :props-pagiation="pagination" @getPage="getOrders" v-if="pagination"></Pagination>

        <button type="button" class="btn" @click="editOrder('-LWfUpAkC5ISnCPQjmRj')">編輯</button>

        <!-- 編輯 Modal -->
        <div class="modal fade" id="orderModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-dark text-white">
                        <h5 class="modal-title d-flex w-100" id="exampleModalLabel">
                            <span>明細</span>
                            <span class="ml-auto">{{ tempOrder.id }}</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="create">建立日期</label>
                                <input type="text" class="form-control" id="create" placeholder="建立日期" :value="tempOrder.create_at | date" disabled>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="origin_price">訂單價錢</label>
                                <input type="number" class="form-control" id="origin_price" placeholder="請輸入原價" v-model="tempOrder.total">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="is_enabled" v-model="tempOrder.is_enabled">
                                <label class="form-check-label" for="is_enabled">付款狀態</label>
                            </div>
                        </div>
                        <hr>
                        <h6 class="h6">訂購人資訊</h6>
                        <div v-if="tempOrder.user">
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="description">姓名</label>
                                    <input type="text" class="form-control" id="name" placeholder="請輸入訂購人資訊" v-model="tempOrder.user.name">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="content">說明內容</label>
                                    <textarea type="text" class="form-control" id="content" placeholder="請輸入產品說明內容"
                                        v-model="tempOrder.content"></textarea>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="is_enabled" v-model="tempOrder.is_enabled"
                                        :true-value="1" :false-value="0">
                                    <label class="form-check-label" for="is_enabled">
                                        付款狀態
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-dark" @click="editOrder(tempOrder.id)">確認</button>
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
                isLoading: false,
                ordersData: [],
                tempOrder: {},
                pagination: {},
            }
        },
        components: {
            Pagination
        },
        methods: {
            // 取得訂單
            getOrders(page = 1) {
                const api =
                    `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`;
                const vm = this;
                vm.isLoading = true;
                this.$http.get(api).then((res) => {
                    console.log(res.data);
                    if (res.data.success) {
                        vm.isLoading = false;
                        vm.ordersData = res.data.orders;
                        vm.pagination = res.data.pagination;
                    }
                })
            },

            openModal(item) {
                const vm = this;
                vm.tempOrder = Object.assign({}, item);
                $('#orderModal').modal('show');
            },

            // 編輯訂單
            editOrder(id) {
                const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/order/${id}`;
                const vm = this;
                // vm.isLoading = true;
                console.log('api_url', api);

                this.$http.put(api, vm.tempOrder).then((res) => {
                    console.log('api res:', res);
                    // if (res.data.success) {
                    //     // vm.isLoading = false;
                    //     vm.getOrders();
                    // }
                })
            }

        },
        created() {
            this.getOrders();
            // this.editOrder("-LWfUpAkC5ISnCPQjmRj");
        }
    }
</script>
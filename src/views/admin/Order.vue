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
                    <th>Email</th>
                    <th width="120">購買款項</th>
                    <th width="120">應付金額</th>
                    <th width="100">是否付款</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item) in orders" :key="item.id">
                    <td></td>
                    <td>{{ item.create_at }}</td>
                    <td>{{ item.user.email }}</td>
                    <td class="text-right">
                        <ul>
                            <li v-for="product in products" :key="product.id">
                                {{ product.product_id }}
                            </li>
                        </ul>
                    </td>
                    <td class="text-right">
                        {{ item.total }}
                    </td>
                    <td>
                        {{ item.is_paid }}
                    </td>
                </tr>
            </tbody>
        </table>

        <!--  props 傳入資料 ／ @ 觸發事件 ／ v-if 避免data未完成出錯 -->
        <Pagination :props-pagiation="pagination" @getPage="getOrders" v-if="pagination"></Pagination>
    </div>
</template>

<script>
    /* eslint-disable */
    import $ from 'jquery';
    import Pagination from "@/components/Pagination.vue";

    export default {
        data() {
            return {
                orders: [],
                pagination: {},
                isLoading: false,
            }
        },
        components: {
            Pagination
        },
        methods: {
            getProducts() {

            },
            getOrders(page = 1) {
                const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`;
                const vm = this;
                vm.isLoading = true;
                this.$http.get(api).then((res) => {
                    console.log(res.data);
                    if (res.data.success) {
                        vm.isLoading = false;
                    }
                })
            },
        },
        created() {
            this.getOrders();
        }
    }
</script>
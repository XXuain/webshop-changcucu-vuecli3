<template>
    <div>
        <loading :active.sync="isLoading"></loading>

        <div class="text-right mt-3">
            <button class="btn btn-outline-primary" @click="openModal('new')">建立新的產品</button>
        </div>
        <table class="table mt-4">
            <thead>
                <tr>
                    <th>#</th>
                    <th width="120">分類</th>
                    <th>產品名稱</th>
                    <th width="120">原價</th>
                    <th width="120">售價</th>
                    <th width="100">是否啟用</th>
                    <th width="80">編輯</th>
                </tr>
            </thead>
            <tbody>
                <!-- <tr v-for="(item, key) in products" :key="key"> -->
                <tr v-for="(item) in products" :key="item.id">
                    <td></td>
                    <td>{{ item.category }}</td>
                    <td>{{ item.title }}</td>
                    <td class="text-right">
                        {{ item.origin_price | currency }}
                    </td>
                    <td class="text-right">
                        {{ item.price | currency }}
                    </td>
                    <td>
                        <span v-if="item.is_enabled == 1" class="text-success">啟用</span>
                        <span v-else>停用</span>
                    </td>
                    <td>
                        <button class="btn btn-sm btn-outline-primary" @click="openModal('edit', item)">編輯</button>
                        <button class="btn btn-sm btn-outline-primary" @click="openModal('delete', item)">刪除</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!--  props 傳入資料 ／ @ 觸發事件 ／ v-if 避免data未完成出錯 -->
        <Pagination :props-pagiation="pagination" @getPage="getProducts" v-if="pagination"></Pagination>

        <!-- 新增編輯 Modal -->
        <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-dark text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                            <span>新增產品</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for="image">輸入圖片網址</label>
                                    <input type="text" class="form-control" id="image" placeholder="請輸入圖片連結" v-model="tempProduct.imageUrl">
                                </div>
                                <div class="form-group">
                                    <label for="customFile">或 上傳圖片
                                        <i class="fas fa-spinner fa-spin" v-if="status.fileUpLoading"></i>
                                    </label>
                                    <input type="file" id="customFile" class="form-control" ref="files" @change="uploadFile">
                                </div>
                                <img :src="tempProduct.imageUrl" class="img-fluid" alt="">
                            </div>
                            <div class="col-sm-8">
                                <div class="form-group">
                                    <label for="title">標題</label>
                                    <input type="text" class="form-control" id="title" placeholder="請輸入標題" v-model="tempProduct.title">
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="category">分類</label>
                                        <input type="text" class="form-control" id="category" placeholder="請輸入分類"
                                            v-model="tempProduct.category">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="price">單位</label>
                                        <input type="unit" class="form-control" id="unit" placeholder="請輸入單位" v-model="tempProduct.unit">
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="origin_price">原價</label>
                                        <input type="number" class="form-control" id="origin_price" placeholder="請輸入原價"
                                            v-model="tempProduct.origin_price">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="price">售價</label>
                                        <input type="number" class="form-control" id="price" placeholder="請輸入售價"
                                            v-model="tempProduct.price">
                                    </div>
                                </div>
                                <hr>

                                <div class="form-group">
                                    <label for="description">產品描述</label>
                                    <textarea type="text" class="form-control" id="description" placeholder="請輸入產品描述"
                                        v-model="tempProduct.description"></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="content">說明內容</label>
                                    <textarea type="text" class="form-control" id="content" placeholder="請輸入產品說明內容"
                                        v-model="tempProduct.content"></textarea>
                                </div>
                                <div class="form-group">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="is_enabled" v-model="tempProduct.is_enabled"
                                            :true-value="1" :false-value="0">
                                        <label class="form-check-label" for="is_enabled">
                                            是否啟用
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary" @click="updateProduct">確認</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- 刪除 Modal -->
        <div class="modal fade" id="delProductModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-danger text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                            <span>刪除產品</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        是否刪除 <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-danger" @click="updateProduct" @keyup.enter="updateProduct">確認刪除</button>
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
                products: [],
                tempProduct: {},
                pagination: {},
                type: '',
                // isNew: false,
                isLoading: false,
                status: {
                    fileUpLoading: false,
                }
            }
        },
        components: {
            Pagination
        },
        methods: {
            getProducts(page = 1) {
                console.log('getProducts(page) = ',page);
                const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`;
                const vm = this;
                vm.isLoading = true;
                this.$http.get(api, vm.user).then((res) => {
                    console.log(res.data);
                    if (res.data.success) {
                        vm.isLoading = false;
                        vm.products = res.data.products;
                        vm.pagination = res.data.pagination;
                    }
                })
            },
            updateProduct() {
                // 預設新增
                let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`;
                let httpMethod = 'post';
                const vm = this;

                // 編輯
                if (vm.type == 'edit') {
                    console.log('編輯');
                    api =
                        `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
                    httpMethod = 'put';

                } else if (vm.type == 'delete') {
                    console.log('刪除');
                    api =
                        `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
                    httpMethod = 'delete';
                }
                this.$http[httpMethod](api, {
                    data: vm.tempProduct
                }).then((res) => {
                    console.log(res.data)
                    if (res.data.success) {
                        $('#productModal').modal('hide');
                        $('#delProductModal').modal('hide');
                        vm.getProducts();
                    } else {
                        console.log('操作失敗');
                    }
                })
            },
            // 圖片上傳
            uploadFile() {
                console.log(this);
                const uploadFile = this.$refs.files.files[0];
                const vm = this;
                const formData = new FormData();
                formData.append('file-to-upload', uploadFile);
                vm.status.fileUpLoading = true;

                const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
                this.$http.post(api, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then((res) => {
                    if (res.data.success) {
                        // 多家的欄位這樣寫會無法雙向綁定
                        // vm.tempProduct.imageUrl = res.data.imageUrl;
                        // vm.tempProduct['imageUrl'] = res.data.imageUrl;

                        // 強制寫入 使用$set(要裝的容器, '裝進容器的key名稱', 內容)
                        vm.status.fileUpLoading = false;
                        vm.$set(vm.tempProduct, 'imageUrl', res.data.imageUrl);
                    } else {
                        console.log(res.data);
                        this.$bus.$emit('messsage:push', res.data.message, 'danger');
                    }
                })
            },
            openModal(type, item) {
                const vm = this;
                switch (type) {
                    case 'new':
                        vm.tempProduct = {};
                        vm.type = 'new';
                        $('#productModal').modal('show');
                        break;
                    case 'edit':
                        vm.tempProduct = Object.assign({}, item);
                        vm.type = 'edit';
                        $('#productModal').modal('show');
                        break;
                    case 'delete':
                        vm.tempProduct = Object.assign({}, item);
                        vm.type = 'delete';
                        $('#delProductModal').modal('show');
                        break;

                    default:
                        break;
                }
                // if(isNew) {
                //     vm.tempProduct = {};
                //     vm.isNew = true;
                // } else {
                //     vm.tempProduct = Object.assign({},item);
                //     vm.isNew = false;
                // }
                // $('#productModal').modal('show');
            }
        },
        created() {
            this.getProducts();
            // this.$bus.$emit('messsage:push', 'test msg', 'success');
        }
    }
</script>
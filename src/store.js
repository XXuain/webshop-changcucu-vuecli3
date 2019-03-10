/* eslint-disable */
import Vue from "vue";
import vuex from 'vuex';
import axios from 'axios';
import router from "./router";

Vue.use(vuex);

export default new vuex.Store({
    state: {
        isLoading: false,

        // 產品
        productsData: [],
        pagination: {},
        countCategory: [],
        CategoryName: {
            All: '全部',
            CarryBag: '隨身包',
            CoinPurse: '零錢包',
            LongWallets: '長夾',
            WatchBand: '錶帶',
        },

        // 購物車
        cartData: {},
    },


    /**
     * 外部呼叫actions方法
     * this.$store.dispatch('updateLoading', false);
     * context:固定參數  payload: 載荷
     * 觸發mutations 使用 context.commit()
     */
    actions: {
        updateLoading(context, status) {
            context.commit('LOADING', status);
        },

        // 取得商品
        getProducts(context, page = 1) {
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
            context.commit('LOADING', true);
            axios.get(api).then((res) => {
                if (res.data.success) {
                    console.log(res.data);
                    context.commit('PRODUCTSDATA', res.data.products);
                    context.commit('COUNTCATEGORY', res.data.products);
                    context.commit('PAGINATION', res.data.pagination);
                    context.commit('LOADING', false);
                }
            })
        },

        // 取得購物車
        getCart(context) {
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
            context.commit('LOADING', true);
            axios.get(api).then((res) => {
                if (res.data.success) {
                    context.commit('LOADING', false);
                    context.commit('CARTDATA', res.data.data);
                }
            })
        },

        // 加入購物車
        addtoCart(context, { id, qty }) {
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
            const cart = {
                'product_id': id,
                qty
            };
            context.commit('LOADING', true);
            axios.post(api, {
                data: cart
            }).then((res) => {
                if (res.data.success) {
                    context.dispatch('getCart');
                    context.commit('LOADING', false);
                }
            })
        },

        // 刪除購物車商品
        removeCart(context, id) {
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
            context.commit('LOADING', true);
            axios.delete(api).then((res) => {
                if (res.data.success) {
                    context.dispatch('getCart');
                    context.commit('LOADING', false);
                }
            })
        },
    },

    /** 
     * 操作資料狀態在mutations裡運作
     * state:指向上方state
    */ 
    mutations: {
        LOADING(state, status) {
            state.isLoading = status;
        },

        // 商品
        PRODUCTSDATA(state, products) {
            state.productsData = products;
        },

        // 分類
        COUNTCATEGORY(state, products) {
            state.countCategory = products.reduce(function (prev, item) {
                prev[item.category] = prev[item.category] || [];

                if (prev[item.category] == []) {
                    prev[item.category] = 0;
                }
                prev[item.category]++;
                return prev;
            }, {});
            state.countCategory['All'] = products.length;
        },

        // 頁籤
        PAGINATION(state, pagination) {
            state.pagination = pagination;
        },

        // 購物車
        CARTDATA(state, carts) {
            state.cartData = carts;
        }
    },

    /**
     * 類似computed
     * 
     */
    getters: {
        isLoading: state => state.isLoading,
        productsData: state => state.productsData,
        countCategory: state => state.countCategory,
        CategoryName: state => state.CategoryName,
        pagination: state => state.pagination,
    }
});
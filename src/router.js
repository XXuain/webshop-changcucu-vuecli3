/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
// import Login from "./components/Login.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',  // 不存在的頁面自動導到登入頁
      redirect: '/client/home'
    },
    /**
     * 後台 ---------------------------------------------------
     */
    {
      path: '/login',
      name: 'Login',
      component: () => import("./views/admin/Login.vue")
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("./views/admin/Admin.vue"),
      // meta: { requiresAuth: true },  // 需要驗證是否登入的頁面
      children: [
        {
          // 產品列表
          path:'products',
          name: 'Products',
          component: () => import("./views/admin/Products.vue"),
          meta: { requiresAuth: true },
        },
        {
          // 訂單列表
          path:'order',
          name: 'Order',
          component: () => import("./views/admin/Order.vue"),
          meta: { requiresAuth: true },
        },
        {
          // 優惠券
          path:'coupon',
          name: 'Coupon',
          component: () => import("./views/admin/Coupon.vue"),
          meta: { requiresAuth: true },
        },
        {
          // 模擬訂單
          path:'customerorder',
          name: 'CustomerOrder',
          component: () => import("./views/admin/CustomerOrder.vue"),
          meta: { requiresAuth: true },
        },
      ]
    },

    /**
     * 前台 ---------------------------------------------------
     */
    {
      path: "",
      name: "Client",
      component: () => import("./views/client/Client.vue"),
      children: [
        {
          // 首頁
          path: "/client/home",
          name: "Home",
          component: () => import("./views/client/Home.vue"),
        },
        {
          // 商品列表
          path: "/client/works",
          name: "Works",
          component: () => import("./views/client/Works.vue"),
        },
        {
          // 商品項目
          path: "/client/works/:productId",
          name: "WorksDetail",
          component: () => import("./views/client/WorksDetail.vue"),
        },
        {
          // 結帳
          path: "/client/check_out",
          name: "CheckOut",
          component: () => import("./views/client/CheckOut.vue"),
        },
        {
          // 確認訂單
          path: "/client/comfirm/:orderId",
          name: "Comfirm",
          component: () => import("./views/client/Comfirm.vue"),
        }
      ]
    }
  ]
});

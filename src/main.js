/* eslint-disable */
// 第三方套件
import Vue from "vue";
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import VeeValidate from 'vee-validate';
import zhTWValidate from 'vee-validate/dist/locale/zh_TW';


// 自行撰寫
import App from "./App.vue";
import router from "./router";
import './bus';
import currencyFilter from "./filters/currency";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

Vue.use(VeeValidate);
VeeValidate.Validator.localize('zh_TW', zhTWValidate);

// 啟用全域元件
Vue.component('Loading', Loading);

// 啟用全域filters
Vue.filter('currency', currencyFilter);

// 把 cookie 的開關打開
axios.defaults.withCredentials = true;

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

/**
 * 導航守衛
 * 當router.js 發現路由有加上 meta: { requiresAuth: true }
 * 代表需要經過導航守衛去做某些驗證
 *  */

router.beforeEach((to, from, next) => {
  // console.log('to:', to, 'from:', from, 'next:', next);
  
  if(to.meta.requiresAuth) {
    // 代表需要驗證
    console.log('這裡需要驗證');
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    axios.post(api).then((res) => {
        console.log(res.data)
        if(res.data.success) {
          // 驗證成功 直接通過
          next();
        } else {
          // 失敗會到登入頁面
          next({
            path: '/login'
          })
        }
    })
  } else {
    // 反之不需要驗證的話直接放行
    next();
  }
});
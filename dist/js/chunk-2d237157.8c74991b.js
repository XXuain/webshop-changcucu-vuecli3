(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d237157"],{fa39:function(t,s,o){"use strict";o.r(s);var c=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",[o("div",{staticClass:"container"},[o("div",{staticClass:"portfolio-item-warp"},[o("div",{staticClass:"portfolio-title"},[o("h2",[t._v(t._s(t.product.category))])]),o("div",{staticClass:"row mb-4"},[o("div",{staticClass:"col-12 col-md-7"},[o("img",{staticClass:"img-fluid",attrs:{src:""+t.product.imageUrl,alt:""}})]),o("div",{staticClass:"col-12 col-md-5 align-self-center"},[o("div",{staticClass:"d-flex align-items-end mb-5"},[o("h1",{staticClass:"display-3 mb-0 mr-2"},[t._v(t._s(t.product.title))]),o("span",{staticClass:"text-secondary"},[t._v(t._s(t.product.description))])]),o("div",{staticClass:"portfolio-price mb-3"},[o("span",{staticClass:"dark"},[t._v(t._s(t._f("currency")(t.product.price)))])]),o("div",{staticClass:"form-row"},[o("div",{staticClass:"col-4 pr-0"},[o("div",{staticClass:"input-group input-group-sm border border-dark h-100"},[o("div",{staticClass:"input-group-prepend"},[o("button",{staticClass:"btn btn-outline-dark border-0",attrs:{type:"button"},on:{click:function(s){t.qtyCounter(0)}}},[t._v("-")])]),o("input",{staticClass:"form-control h-100 border-0 text-center",attrs:{type:"text"},domProps:{value:t.product.qty}}),o("div",{staticClass:"input-group-append"},[o("button",{staticClass:"btn btn-outline-dark border-0",attrs:{type:"button"},on:{click:function(s){t.qtyCounter(1)}}},[t._v("+")])])])]),o("div",{staticClass:"col pl-0"},[o("button",{staticClass:"btn btn-dark h-100",on:{click:t.addtoCart}},[t._v("加入購物車")])])])])])])])])},a=[],i={data:function(){return{baseUrl:"/webshop-changcucu-vuecli3/dist",isLoading:!1,productId:"",product:{}}},methods:{getProductDetail:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("yellow","/product/").concat(t.productId);t.isLoading=!0,this.$http.get(s).then(function(s){console.log(s.data.product),s.data.success&&(t.product=s.data.product,t.$set(t.product,"qty",1))})},addtoCart:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("yellow","/cart"),s=this,o={product_id:s.product.id,qty:s.product.qty};this.$http.post(t,{data:o}).then(function(t){t.data.success&&console.log("成功加入購物車")})},qtyCounter:function(t){var s=this;0==t&&s.product.qty>=2?s.product.qty-=1:1==t&&(s.product.qty+=1)}},created:function(){this.productId=this.$route.params.productId,this.getProductDetail()}},r=i,d=o("2877"),n=Object(d["a"])(r,c,a,!1,null,null,null);n.options.__file="WorksDetail.vue";s["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d237157.8c74991b.js.map
## 安裝vue cli3

#### step1. 安裝
```
npm install -g @vue/cli
```
#### step2. 查看版本
```
vue --version
```

## 創建&設定 專案

### 創建專案
```
vue create hello-world
```
### 專案設定檔
#### step1. 選擇安裝方式
```
? Please pick a preset:
  default (babel, eslint)
❯ Manually select features  // 手動安裝設定檔
```

#### step2. 設定檔選項
```
? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◉ Babel          // 將ES6編譯成大部分瀏覽器可運行的程式碼
 ◯ TypeScript
 ◯ Progressive Web App (PWA) Support
 ◉ Router         // 安裝完後會自動產生view資料夾
 ◯ Vuex
 ◉ CSS Pre-processors
 ◉ Linter / Formatter
 ◯ Unit Testing
 ◯ E2E Testing
 ```
#### step3. 選擇CSS的寫法
```
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS
```
#### step4. 選擇ESLink的規範
```
? Pick a linter / formatter config: (Use arrow keys)
❯ ESLint with error prevention only  // 不嚴謹
  ESLint + Airbnb config             // 最嚴謹 不建議初學
  ESLint + Standard config           // 中級嚴謹
  ESLint + Prettier                  // 自己建議自己的選項XD
```
#### step5. 錯誤提示位置
```
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◉ Lint on save                      // 儲存時顯示
 ◯ Lint and fix on commit
```
#### step6. 設定檔撰寫位置
```
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? (Use arrow keys)
  In dedicated config files          // 獨立檔案
❯ In package.json                    // 都在package.json
```
#### step7. 是否儲存成創建預設
```
? Save this as a preset for future projects? (y/N)
```

#### step8. 運行vue cli
```
 $ cd webshop-changcucu-vuecli  // 進入專案資料夾
 $ npm run serve
```

### 依自己需求安裝套件
#### step1. 安裝套件
```
 $ npm install --save bootstrap jquery popper.js axios vue-axios vue-loading-overlay vee-validate
```
- `vue-loading-overlay` 讀取中效果
- `vee-validate` 驗證
｀
#### step2. 載入套件
進入 `src/main.js`
 ```
 import axios from 'axios';
 import VueAxios from 'vue-axios';
 import Loading from 'vue-loading-overlay';
 import 'vue-loading-overlay/dist/vue-loading.css';
 import 'bootstrap';
 ```

### 新增常數檔.env
- 新增`.env`
- 寫法`VUE_APP_` + 自訂常數名稱
- 取用方式`process.env.` + 自訂常數名稱

### 客製化bootstrap
#### step1. 在`src/assets`裡新增`all.scss`
#### step2. `all.scss` 依自己需求變化
1. 複製`~bootstrap/scss/_variables.scss`到`src/assets`並載入
2. 載入檔案：
   - `@import '~bootstrap/scss/functions';`  // 變數設定
   - `@import '~bootstrap/variables';`       // 自定義變數
   - `@import '~bootstrap/scss/bootstrap';`  // 預設將所有元件先載入
#### step3. 在`App.vue`引入`@import './assets/all'`
#### 元件封裝樣式
只有在該元件才會有的樣式 加上`scoped`
```
<style scoped>
</style>
```

### 強制寫入
https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
使用`$set(要裝的容器, '裝進容器的key名稱', 內容)`

### 讀取效果套件
1. vue-loading-overlay
https://github.com/ankurk91/vue-loading-overlay
`<loading :active.sync="isLoading"></loading>`
- isLoading = false 停用，反之
  
2. fontawesome
https://fontawesome.com/how-to-use/on-the-web/styling/animating-icons
- 使用`v-if`操作顯示隱藏

### 錯誤訊息
在元件內的錯誤訊息如果要傳到最外層去 需要傳很多層
所以使用`vue event bus` 將 alert 掛載在vue原型下 並且直接操作vue原型來控制alert


-----------

2019/01/13
登入成功後 使用vm.$router.push('/') 倒到首頁
之後要講登出

#### Compiles and minifies for production
```
npm run build
```

#### Run your tests
```
npm run test
```

#### Lints and fixes files
```
npm run lint
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

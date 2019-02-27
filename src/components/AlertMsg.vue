<template>
    <div class="message-alert">
        <div class="alert alert-dismissible" :class="'alert-' + item.status" v-for="(item, i) in messages" :key="i">
            {{ item.message }}
            <button type="button" class="close" @click="removeMessage(i)" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
        data() {
            return {
                messages: [],
                //   messages: [{
                //     message: '訊息內容',
                //     status: 'danger',
                //     timestamp: 123,
                //     position: 'right'
                //   }],
            };
        },
        methods: {
            // 處發
            updateMessage(message, status) {
                const timestamp = Math.floor(new Date() / 1000);
                this.messages.push({
                    message,
                    status,
                    timestamp,
                    // position
                });
                // 移除自己
                // this.removeMessageWithTiming(timestamp);
            },
            // 點選叉叉觸發
            removeMessage(num) {
                this.messages.splice(num, 1);
            },
            removeMessageWithTiming(timestamp) {
                const vm = this;
                setTimeout(() => {
                    vm.messages.forEach((item, i) => {
                        if (item.timestamp === timestamp) {
                            vm.messages.splice(i, 1);
                        }
                    });
                }, 5000); // 5秒移除自己
            },
        },
        created() {
            const vm = this;

            // 自定義名稱 'messsage:push'
            // message: 傳入參數
            // status: 樣式，預設值為 warning

            /**
             * 直接在vue $bus上 使用$on 加上 'message:push' 的方法
             * 外層用 $on('方法名稱', (內容, 狀態))
             * 內層用 $emit
             *  */
            vm.$bus.$on('messsage:push', (message, status = 'warning') => {
                // 並觸發
                vm.updateMessage(message, status);
            });
            // vm.$bus.$emit('message:push');
        },
    };
</script>

<style scope>
    .message-alert {
        position: fixed;
        max-width: 50%;
        top: 56px;
        right: 20px;
        z-index: 1100;
    }
    .alert-top {

    }

    .alert-right {
        right: 20px;
    }
</style>
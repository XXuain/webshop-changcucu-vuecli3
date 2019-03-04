<template>
    <div class="loading">
        <img :src="`${baseUrl}/img/logo.svg`" alt="" width="100">
    </div>
</template>
<script>
    export default {
        name: 'Loading',
        data() {
            return {
                baseUrl: process.env.VUE_APP_IMGURL,
            }
        }
    }
</script>
<style lang="scss" scoped>
    .loading {
        background: #DEDFDF;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2000;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 120px;
            opacity: .9;
        }
    }
</style>
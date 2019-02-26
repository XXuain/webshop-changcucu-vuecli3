<template>
    <div>
        <nav class="navbar navbar-light bg-white fixed-top flex-md-nowrap has-sidebar-left">
            <ul class="navbar-nav px-3 ml-auto">
                <li class="nav-item text-nowrap">
                    <a class="nav-link" href="#" @click.prevent="signout">登出</a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
    /* eslint-disable */
    export default {
        name: 'Navbar',
        data() {
            return {
                baseUrl: process.env.VUE_APP_IMGURL,
            }
        },
        methods: {
            signout() {
                const api = `${process.env.VUE_APP_APIPATH}/logout`;
                const vm = this;
                this.$http.post(api).then((res) => {
                    console.log(res);
                    if (res.data.success) {
                        vm.$router.push('/login');
                    }
                })
            }
        }
    }
</script>
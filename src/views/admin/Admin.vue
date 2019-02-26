<template>
    <div>
        <Navbar></Navbar>
        <Alert></Alert>
        <div class="container-fluid">
            <div class="row">
                <Sidebar></Sidebar>
                <main class="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <!-- 切換不同元件 -->
                    <router-view></router-view>
                </main>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */ 
import Sidebar from "@/components/AdminSidebar.vue";
import Navbar from "@/components/AdminNavbar.vue";
import Alert from "@/components/AlertMsg.vue"

export default {
    name: "admin",
    components: {
        Sidebar,
        Navbar,
        Alert,
    },
};
</script>
<style>

</style>
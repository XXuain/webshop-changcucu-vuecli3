<template>
    <div>
        <AdminNavbar/>
        <Alert/>
        <div class="container-fluid">
            <div class="row">
                <AdminSidebar/>
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
import AdminSidebar from "@/components/AdminSidebar.vue";
import AdminNavbar from "@/components/AdminNavbar.vue";
import Alert from "@/components/AlertMsg.vue"

export default {
    name: "admin",
    components: {
        AdminSidebar,
        AdminNavbar,
        Alert,
    },
};
</script>
<style>

</style>
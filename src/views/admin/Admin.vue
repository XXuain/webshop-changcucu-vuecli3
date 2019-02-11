<template>
    <div>
        <Navbar></Navbar>
        <Alert></Alert>
        <div class="container-fluid">
            <div class="row">
                <Sidebar></Sidebar>
                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <!-- 切換不同元件 -->
                    <router-view></router-view>
                </main>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */ 
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";
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
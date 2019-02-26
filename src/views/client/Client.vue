<template>
    <div>
        <!-- navbar -->
        <ClientNavbar />
        <main class="has-navbar-fixed-top">
            <router-view></router-view>
        </main>
        <!-- footer -->
        <ClientFooter/>
    </div>
</template>
<script>
  /* eslint-disable */
  import ClientNavbar from "@/components/ClientNavbar.vue";
  import ClientFooter from "@/components/ClientFooter.vue";

  export default {
    name: "client",
    components: {
      ClientNavbar,
      ClientFooter,
    }
  };
</script>
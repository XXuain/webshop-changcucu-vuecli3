<template>
    <div class="wrapper">
        <!-- navbar -->
        <ClientNavbar />
        <main class="py-5">
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
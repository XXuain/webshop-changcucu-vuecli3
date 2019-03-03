<template>
    <div>
        <!-- navbar -->
        <Alert/>
        <ClientNavbar />
        <main class="has-client-navbar-fixed-top">
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
  import Alert from "@/components/AlertMsg.vue"

  export default {
    name: "client",
    components: {
      ClientNavbar,
      ClientFooter,
      Alert,
    }
  };
</script>
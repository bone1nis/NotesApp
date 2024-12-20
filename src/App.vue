<template>
  <TheHeader />
  <div class="wrapper-content">
    <div class="container">
      <router-view />
    </div>
  </div>
  <TheFooter />
</template>

<script>

import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

export default {
  components: {TheHeader, TheFooter},
  data() {
        return {
        }
    },
};
</script>


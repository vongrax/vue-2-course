<template>
  <div class="app">
    <v-app>
      <Navbar/>
      <router-view/>
    </v-app>
  </div>
</template>

<script>

import Navbar from "@/components/Navbar";
export default {
  name: 'App',
  components: {
    Navbar
  },
};
</script>

<style>

html, body {
  padding: 0;
  margin: 0;
}

.app {
  margin: 0 auto;
}
</style>

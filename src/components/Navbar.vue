<template>
  <v-container fluid>
    <v-app-bar
        color="indigo"
        dark
    >
      <v-spacer/>
      <v-btn outlined class="ml-3">
        <router-link class="nav-link" to="/">Главная</router-link>
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {

}

</script>

<style scoped>
.nav-link {
  text-decoration: none;
  color: #fefefe;
}
</style>

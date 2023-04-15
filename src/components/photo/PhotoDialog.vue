<template>
  <v-dialog max-width="600" v-model:value="value">
      <v-card>
        <v-card-title>{{photo.title}}</v-card-title>
        <v-card-text>
          <v-img :src="photo.url"/>
        </v-card-text>
      </v-card>
  </v-dialog>
</template>

<script>
export default {
  props:{
    photo:{
      type:Object,
      required:true,
    },
    value:{
      type:Boolean,
      required: true
    }
  }
}

</script>

<style scoped>

</style>

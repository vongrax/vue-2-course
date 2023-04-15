<template>
  <v-col cols="4">
      <v-card
          class="mx-auto my-12"
          max-width="374"
          @click="onClickProduct"
      >
        <v-img
            height="250"
            :src="product.image"
        ></v-img>

        <v-card-title>{{product.title}}</v-card-title>

        <v-card-text>
          <v-row
              align="center"
              class="mx-0"
          >
            <v-rating
                :value="product.rating.rate"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
            ></v-rating>

            <div class="grey--text ms-4">
             {{product.rating.rate}} ({{product.rating.count}})
            </div>
          </v-row>

          <div class="my-4 text-subtitle-1">
            {{product.price}} $
          </div>

          <div>{{product.description}}</div>
        </v-card-text>
      </v-card>
  </v-col>
</template>

<script>
export default {
  props:{
    product:{
      type:Object,
      required:true
    }
  },
  methods: {
    onClickProduct(){
      this.$emit('onClickProduct',this.product.id)
    }
  }

}

</script>

<style scoped>

</style>

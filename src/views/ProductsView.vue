<template>
  <v-container>
    <v-row>
      <base-product-card v-for="product in getAllProducts" :key="product.id" :product="product"  @onClickProduct="onClickProduct"/>
    </v-row>
    <PhotoDialog :photo="currentPhoto" v-model="show"/>
  </v-container>
</template>

<script>
import BaseProductCard from "@/components/photo/BaseProductCard";
import Photoform from "@/components/photo/Photoform";
import PhotoDialog from "@/components/photo/PhotoDialog";
import {mapGetters} from "vuex";

export default {
  components: {PhotoDialog, Photoform, BaseProductCard},
  data:()=>({
    photosData:[],
    currentPhoto:{},
    show:false
  }),
  computed: {
    ...mapGetters("products", ['getAllProducts']),
  },
  methods:{
    onClickProduct(id){
      console.log(id)
    }
  },
  mounted() {
    this.$store.dispatch('products/fetchAllProducts')
  },
}

</script>

<style scoped>

</style>

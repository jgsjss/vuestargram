<template>
  <div>
      
      <Post :instarData="instarData[i]" v-for="(a, i) in instarData" :key="a"/>
  
    
  </div>
</template>

<script>
import Post from './Post.vue'

export default {
  
    props : {
        instarData : Array,
    },
    components: {
        Post,
    },
}
</script>

<style>

</style>
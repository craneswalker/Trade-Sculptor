<template>
  <div id="Navigation">
    <router-link class="btn btn-primary btn-lg" to="/yours">Lookup Cards</router-link>    
    <router-link class="btn btn-primary btn-lg" to="/trade">See Your Trade</router-link>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data(){
    return{

    }
  }
}
</script>

<style scoped>
#Navigation{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgb(85, 85, 85);
}

</style>

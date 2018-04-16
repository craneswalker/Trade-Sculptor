<template>
  <div id="app" >
    <link  rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css">
    <Navigation></Navigation>
    <div class="jumbotron">
      <h1 class="display-3">The Trade Sculptor</h1>
      <p class="lead">Trade your Magic : The Gathering cards with confidence!</p>
      <hr class="my-4">
      <router-view :yourTrades="yourTrades" :theirTrades="theirTrades"/>
    </div>
  </div>
</template>

<script>
import Navigation from '@/component/Navigation'
import Landing from '@/components/Landing'
import YourCardSearch from '@/components/YourCardSearch'
import TheirCardSearch from '@/components/TheirCardSearch'
import Trade from '@/components/Trade'

export default {
  name: 'App',
  components: {
    Navigation,
    Landing,
    YourCardSearch,
    TheirCardSearch,
    Trade,
  },
  data(){
    return{
      theirTrades: [],
      yourTrades: []
    }
  },
  mounted() {
    this.yourTradesList()
    this.theirTradesList()
  },
  methods:{
    yourTradesList() {
      fetch("../static/yourTrades.json")
        .then(response => response.json())
        .then(yourTrades => this.yourTrades = yourTrades)
    },
    theirTradesList(){
      fetch("../static/theirTrades.json")
        .then(response => response.json())
        .then(theirTrades => this.theirTrades = theirTrades)
    }, 
  }

}
</script>

<style>

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(85, 85, 85);
}

</style>

<template>
  <div id="app" >
    <link  rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css">
    <nav>
      <router-link class="btn btn-primary btn-lg" to="/yours">Lookup Cards</router-link>    
      <router-link class="btn btn-primary btn-lg" to="/trade">See Your Trade</router-link>
    </nav>
    <div class="jumbotron">
      <h1 class="display-3">The Trade Sculptor</h1>
      <p class="lead">Trade your Magic : The Gathering cards with confidence!</p>
      <hr class="my-4">
      <transition name="fade">
        <router-view :yourTrades="yourTrades" :theirTrades="theirTrades"/>
      </transition>  
    </div>
  </div>
</template>

<script>
import Landing from '@/components/Landing'
import YourCardSearch from '@/components/YourCardSearch'
import TheirCardSearch from '@/components/TheirCardSearch'
import Trade from '@/components/Trade'

export default {
  name: 'App',
  components: {
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
nav {
  display: flex;
  flex-direction: row;
}

ul {
  list-style-type: none;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>

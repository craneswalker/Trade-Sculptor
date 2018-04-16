<template>
  <div id="Trade">
    <div class="jumbotron">
      <h1 class="display-3">Your Trades</h1>
      <ul v-for="yourTrade in yourTrades" :key="yourTrade.id">
        <li>
          <div class="card border-primary mb-3" >
            <div class="card-header">Set: {{yourTrade.setName}}</div>
            <div class="card-body">
              <h4 class="card-title">{{yourTrade.name}}</h4>
              <img v-if="yourTrade.imageUrl" :src="yourTrade.imageUrl" :alt="yourTrade.name">
              <p v-else>(No Image Provided)</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="jumbotron">
      <h1 class="display-3">Their Trades</h1>
      <ul v-for="theirTrade in theirTrades" :key="theirTrade.id">
        <li>
          <div class="card border-primary mb-3" >
            <div class="card-header">Set: {{theirTrade.setName}}</div>
            <div class="card-body">
              <h4 class="card-title">{{theirTrade.name}}</h4>
              <img v-if="theirTrade.imageUrl" :src="theirTrade.imageUrl" :alt="theirTrade.name">
              <p v-else>(No Image Provided)</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Trade',
  props:[
    'yourTrades',
    'theirTrades'
  ],

}
</script>

<style scoped>

</style>

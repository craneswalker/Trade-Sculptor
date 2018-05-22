<template>
  <div>
    <div class="card text-white bg-secondary mb-3" style="max-width: 50rem;">
      <div class="card-header">
        <router-link class="btn btn-secondary btn-lg" to="/yours">Search For YOUR Cards</router-link>
        <button class="btn btn-primary btn-lg">Search For THEIR Cards</button>
      </div>
      <div class="card-body">
        <!-- Card Search -->
        <h4 class="card-title">Search for your cards one at a time</h4>
        <div class="form-group">
          <label class="col-form-label col-form-label-lg" for="inputLarge">What card are you trading for?</label>
          <input v-model="cardName" @keyup.enter="loadCards" class="trade-away-search form-control form-control-lg" type="text" placeholder="Card Name" id="inputLarge"/>
          <br>
          <button @click="loadCards" type="submit" class="btn btn-primary">Find</button>
        </div>
        <!-- Card Display -->
        <ul v-for="listOfCard in listOfCards.cards" :key="listOfCard.id">
          <li>
            <div class="card border-primary mb-3" >
              <div class="card-header">Set: {{listOfCard.setName}}</div>
              <div class="card-body">
                <h4 class="card-title">{{listOfCard.name}}</h4>
                <img v-if="listOfCard.imageUrl" :src="listOfCard.imageUrl" :alt="listOfCard.name">
                <img v-else src="../assets/300px-No_image_available.svg.png">
                <button @click="toTheirTrades(listOfCard)" type="button" class="btn btn-primary">Select This Card</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheirCardSearch',
  components: {},
  data(){
    return{
      cardName:'',
      listOfCards: [],
      theirTrade:{}
    }
  },
  props:[
    'theirTrades',
  ],
  methods: {
    loadCards(cardName) {
      let removeChars = this.cardName.replace(/[^a-zA-Z ]/g, "")
      let fixedName = removeChars.split(' ').join('_')
      fetch(`https://api.magicthegathering.io/v1/cards?name=${fixedName}`)
        .then(response => response.json())
        .then(response => {
          this.listOfCards = response
          return response
        })
      this.cardName = ""      
    },
    
    toTheirTrades(listOfCard) {
      const cardIndex = this.listOfCards.cards.indexOf(listOfCard)      
      this.theirTrades.push(this.listOfCards.cards[cardIndex])
      alert("This card has been added to their list.  Keep searching for more, or add another!")

    }
  }
}
</script>

<style>
.btn-lg {
  width: 49%;
}
.mb-3 {
  display: flex;
  flex-direction: row;
  max-width: 20rem;
}  


</style>
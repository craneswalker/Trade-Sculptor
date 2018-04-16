<template>
  <div>
    <div class="card text-white bg-secondary mb-3" style="max-width: 50rem;">
      <div class="card-header">
        <button class="btn btn-primary btn-lg">Search For YOUR Cards</button>
        <router-link class="btn btn-secondary btn-lg" to="/theirs">Search For THEIR Cards</router-link>
      </div>
      <div class="card-body">
        <!-- Card Search -->
        <h4 class="card-title">Search for your cards one at a time</h4>
        <div class="form-group">
          <label class="col-form-label col-form-label-lg" for="inputLarge">What card are you trading?</label>
          <input v-model="cardName" class="trade-away-search form-control form-control-lg" type="text" placeholder="Card Name" id="inputLarge"/>
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
                <p v-else>(No Image Provided)</p>
                <button @click="toYourTrades(listOfCard)" type="button" class="btn btn-primary">Select This Card</button>
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
  name: 'YourCardSearch',
  components: {},
  data(){
    return{
      cardName:'',
      listOfCards: [],
    }
  },
  props:[
    'yourTrades',
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
    toYourTrades(listOfCard) {
      const cardIndex = this.listOfCards.cards.indexOf(listOfCard)      
      this.yourTrades.push(this.listOfCards.cards[cardIndex])
    }
  }
}
</script>

<style>

.mb-3 {
  display: flex;
  flex-direction: row;
  max-width: 20rem;
}  
</style>
<template>
  <div style="margin: 20px">
    <h1>{{ msg }}</h1>
    <div>
      <input v-model="colors[0]" type="checkbox" class="mana-checkbox form-check-input" style="background-color: red">
      <input v-model="colors[1]" type="checkbox" class="mana-checkbox form-check-input" style="background-color: blue">
      <input v-model="colors[2]" type="checkbox" class="mana-checkbox form-check-input" style="background-color: green">
      <input v-model="colors[3]" type="checkbox" class="mana-checkbox form-check-input" style="background-color: bisque">
      <input v-model="colors[4]" type="checkbox" class="mana-checkbox form-check-input" style="background-color: black">
    </div>
    <input v-model="deckSize" type="number" min="1" max="20" placeholder="Deck size (max 20)"/>
    <button @click="createDeck">Create deck</button>
    <div v-if="this.cards.length==0 || this.loading" style="padding-block-start: 30px">
      <h4 style="padding: 70px; border: dashed 5px">{{ getPageText() }}</h4>
    </div>
    <div v-else class="row" style="padding: 10px">
      <div v-for="card in cards" v-bind:key="card" class="col-3" style="padding: 10px">
        <img v-if="card.image_uris.normal" v-bind:src=card.image_uris.normal class="img-fluid">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CardSearch',
  props: {
    msg: String,
  },
  data() {
    return {
      cards: [],
      colors: [false, false, false, false, false],
      loading: false,
      deckSize: 4
    }
  },
  computed: {
    colorCodes() {
      return ['r', 'u', 'g', 'w', 'b'];
    },
  },

  methods: {
    getPageText() {
      return this.loading ? "Loading..." : "Choose deck colors + size and click \"Create Deck";
    },

    getColorIdentityString() {
      const colorArray = [];
      for (let i = 0; i < this.colors.length; i++) {
        if (this.colors[i]) {
          colorArray.push(this.colorCodes[i])
        }
      }
      return colorArray.join('')
    },

    async createDeck() {
      this.deckSize = Math.min(this.deckSize, 20);
      this.loading = true;
      const deck = []
      for (let i = 0; i < this.deckSize; i++) {
        const randomCard = await this.getRandomCard();
        deck.push(randomCard)
      }
      this.cards = deck;
      this.loading = false;
    },

    async getRandomCard() {
      const colorQuery = 'c<=' + this.getColorIdentityString() + ' -c:c';
      const response = await fetch("https://api.scryfall.com/cards/random?format:image&pretty:true&q=" + colorQuery);
      return response.json();
    },

  },
}
</script>

<style scoped>
.mana-checkbox {
  padding: 20px;
  border-radius: 50%;
}

h1 {
  font-family: 'Bebas Neue', Avenir, Helvetica, Arial, sans-serif;
  margin: 20px 0 0;
}

input {
  margin: 20px 0 0;
}
</style>

<template>
  <div>
    <div class="buttons">
      <button @click="addCard">add</button>
      <button @click="deleteCard">delete</button>
      <h1>ID: {{ game_id }}</h1>
    </div>
    <p style="position: fixed; top: 30px; left: 0;">
     {{ cards.length }}
    </p>
    <ul>
      <transition-group name="fade">
        <Card v-for="card in cards" :key="card" :id="card" :rotate="transforms[card]"></Card>
      </transition-group>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import io from "socket.io-client";
import Card from '~/components/Card.vue';

export default Vue.extend({
  name: 'screen' as string,
  data() {
    return {
      game_id: "" as string,
      socket: null as any,
      cards: [0,1] as number[],
      transforms: [] as number[]
    }
  },
  components: {
    Card
  },
  methods: {
    addClient(): void {
      this.game_id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      this.socket.emit('addClient', { gameId: this.game_id });
    },
    getTransformPerCard(amountOfCards: number): void {
      this.transforms = [];
      for (let i = 0; i < amountOfCards; i++) {
        // A list of transformations for cards (on index)
        this.transforms.push((360/amountOfCards) * (i + 1));
      }
    },
    addCard() {
      var lastCard = this.cards.length;
      console.log(lastCard);
      this.cards.push(lastCard);
      this.getTransformPerCard(this.cards.length);
    },
    deleteCard(): void {
      this.cards.splice(-1,1);
      this.getTransformPerCard(this.cards.length);
    }
  },
  created() {
    this.socket = io("http://localhost:3100");
  },
  mounted() {
    this.addClient();
    this.getTransformPerCard(this.cards.length);
  }
})
</script>

<style scoped>
.buttons {
  display: flex;
  position: fixed;
  top: 0; left: 0;
}
button {
  margin: .2em .5em
}
</style>

<template>
  <div>
    <h1>ID: {{ game_id }}</h1>
    <div class="buttons">
      <button @click="addCard">add</button>
      <button @click="deleteCard">delete</button>
    </div>
    <p style="position: fixed; top: 30px; left: 0;">
     {{ cards.length }}
    </p>
    <ul>
      <transition-group name="item">
        <Card v-for="card in cards" v-bind:key="card" :rotate="transforms[card]"></Card>
      </transition-group>
    </ul>
  </div>
</template>

<script>
import io from "socket.io-client";
import Card from '~/components/Card.vue';

export default {
  name: 'screen',
  data() {
    return {
      game_id: null,
      socket: null,
      cards: [0,1],
      transforms: []
    }
  },
  components: {
    Card
  },
  methods: {
    addClient() {
      this.game_id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      this.socket.emit('addClient', { gameId: this.game_id });
    },
    getTransformPerCard(length) {
      this.transforms = [];
      for (var i = 0; i < length; i++) {
        this.transforms.push((360/length) * (i + 1));
      }
    },
    addCard() {
      var lastCard = (this.cards.length - 1) + 1;
      this.cards.push(lastCard);
      this.getTransformPerCard(this.cards.length);
    },
    deleteCard() {
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
}
</script>

<style scoped>

</style>

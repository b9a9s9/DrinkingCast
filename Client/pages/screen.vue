<template>
  <div>
    <h1>ID: {{ game_id }}</h1>
  </div>
</template>

<script>
import io from "socket.io-client";

export default {
  name: 'screen',
  data() {
    return {
      game_id: null,
      socket: null
    }
  },
  methods: {
    addClient() {
      this.game_id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      this.socket.emit('addClient', { gameId: this.game_id });
    }
  },
  created() {
    this.socket = io("http://localhost:3100");
  },
  mounted() {
    this.addClient();
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="wrapper">
    <p style="position: absolute; top: 0; left: 0;">{{ state }}</p>
    <input v-model="username" placeholder="username">
    <input v-model="room" placeholder="give room id">
    <button @click="joinRoom">enter</button>
  </div>
</template>

<script>
import io from "socket.io-client";

export default {
  name: 'controller',
  data() {
    return {
      username: null,
      room: null,
      socket: null,
      state: []
    }
  },
  methods: {
    joinRoom() {
      if(this.username && this.room != null) {
        this.socket.emit('joinRoom', this.username, this.room );
      }
    }
  },
  created() {
    this.socket = io("http://192.168.178.20:3100");

    this.socket.on('updateRoom', (data) => {
      this.state.push(data);
    });
  }
}
</script>

<style scoped>

</style>

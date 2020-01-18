<template>
  <div class="container">
    <canvas ref="game" width="640" height="480" style="border: 1px solid black;"></canvas>
    <br>
    <div>
      <button class="button" v-for="button in buttons" v-bind:key="button" @click="move(button)">
        {{ button }}
      </button>
    </div>
    <br>
  </div>
</template>

<script>
import io from "socket.io-client";

export default {
  name: 'BlockGame',
  data() {
    return {
      socket: {},
      context: {},
      position: {
          x: 0,
          y: 0
      },
      buttons: ['right', 'left', 'up', 'down']
    }
  },
  methods: {
    move(direction) {
      this.socket.emit("move", direction);
    },
    loadContext() {
      this.blockGame = true;
      this.context = this.$refs.game.getContext("2d");
      this.socket.on("position", data => {
          this.position = data;
          this.context.clearRect(0, 0, this.$refs.game.width, this.$refs.game.height);
          this.context.fillStyle = "#FFFFFF";
          this.context.fillRect(0, 0, this.$refs.game.width, this.$refs.game.width);
          this.context.fillStyle = "#000000";
          this.context.fillRect(this.position.x, this.position.y, 20, 20);
      });
    }
  },
  created() {
    this.socket = io("http://localhost:3100");
  },
  mounted() {
    this.loadContext();
  }
}
</script>

<style>
  .flex {
    display: flex;
  }
  .button {
    margin-right: .5em;
  }
</style>

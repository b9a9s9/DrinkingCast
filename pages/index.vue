<template>
  <div class="wrapper">
    <nuxt-link to="/screen">
      <button>Create Game</button>
    </nuxt-link>
    <nuxt-link to="/controller">
      <button>Join Game</button>
    </nuxt-link>
  </div>
</template>

<script>
import axios from 'axios'
import io from "socket.io-client";

export default {
  name: 'index'
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  input {
    display: block;
    margin: .5em 0;
  }
  button {
    margin: 2em;
  }
  .columns {
    display: flex;
  }
  .column {
    margin: 1em;
    padding: 1em;
    border: 1px solid;
  }
  .wrapper {
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
  }
</style>

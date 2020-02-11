<template>
  <section>
    <div style="text-align: center">
    <img src="https://cdn.discordapp.com/attachments/648842340273750026/675728343584342039/Structure.png" alt="Logo">
    </div>

    <div class="has-text-centered" style="margin: 100px">
      <b-button class="is-rounded is-large" icon-left="" tag="nuxt-link" to="/">Host</b-button>
      <b-button class="is-rounded is-large" icon-left="" tag="nuxt-link" to="/">Join</b-button>
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue'
export default Vue.extend({
  name: 'index' as string,

  data: () =>  {
    return {
      loading: false as boolean
    }
  }
})

</script>

<style lang="scss">
  img{
    height: 250px;
    margin: 50px;
  }
</style>

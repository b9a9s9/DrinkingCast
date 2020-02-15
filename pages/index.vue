<template>
  <section class="container has-text-centered">
    <figure class="image is-400x400 is-inline-block has-margin-50">
      <img src="https://cdn.discordapp.com/attachments/648842340273750026/675728343584342039/Structure.png" alt="Logo">
    </figure>

    <div class="container">
      <b-button class="is-primary is-rounded is-large" icon-left="" tag="nuxt-link" to="/">Host</b-button>
      <b-button class="is-rounded is-large" icon-left="" tag="nuxt-link" to="/">Join</b-button>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'index' as string,
}

</script>

<style lang="scss">
  html{
    background: #6b2510;
  }

</style>

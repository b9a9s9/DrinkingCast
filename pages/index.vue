<template>
  <section class="container has-text-centered">

    <figure class="image is-256x256 is-inline-block has-margin-50">
      <img src="https://cdn.discordapp.com/attachments/648842340273750026/675728343584342039/Structure.png" alt="Logo">
    </figure>

    <div class="columns buttons is-centered">
      <div class="column is-narrow is-narrow-mobile">
        <b-button class="is-rounded is-large" icon-left="" tag="nuxt-link" to="/">Join</b-button>
      </div>

      <div class="column is-narrow is-narrow-mobile">
        <b-button class="is-rounded is-large is-primary" icon-left="" tag="nuxt-link" to="/">Host</b-button>
      </div>
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

<template>
  <section class="hero is-fullheight">

    <div class="hero-body">

      <div class="container has-text-centered">
        <figure class="image is-256x256 is-inline-block">
          <img src="https://cdn.discordapp.com/attachments/648842340273750026/675728343584342039/Structure.png"
               alt="Logo">
        </figure>

        <div class="columns">
          <div class="column has-text-centered has-text-black">
            Enter code
          </div>
        </div>

        <div class="columns">
          <div class="column has-text-centered">
            <b-field>
              <b-input placeholder="enter code: e.g 12345"
                       rounded @keydown.native.enter=""
                       type="search"
                       icon="magnify"
                       icon-clickable
                       @icon-click=""
              ></b-input>
            </b-field>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<script>
  export default {
    name: 'join_game'
  };
</script>

<style scoped lang="scss">

</style>

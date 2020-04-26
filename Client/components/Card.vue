<template>
    <li @click="getId(id)" v-bind:style="{transform: 'rotate('+ rotate +'deg)'}">
      {{ id }}
    </li>
</template>

<script>
export default {
    name: 'Card',
    props: {
        id: Number,
        rotate: Number
    },
    methods: {
      getId(cardId) {
        alert('kaart: ' + cardId);
      }
    }
}
</script>

<style scoped>
li {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 170px;
    width: 130px;
    background: #51A375;
    border: 8px solid white;
    left: 0; right: 0;
    margin: auto;
    position: absolute;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,.24);
    transform-origin: center 350px;
    transition: all 0.5s ease;
}
</style>

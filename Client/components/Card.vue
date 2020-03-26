<template>
    <li v-bind:style="{transform: 'rotate('+ rotate +'deg)'}"></li>
</template>

<script>
export default {
    name: 'Card',
    props: {
        rotate: Number
    }
}
</script>

<style scoped>
li {
    height: 170px;
    width: 130px;
    background: #51A375;
    border: 8px solid white;
    box-sizing: border-box;
    left: 0; right: 0;
    margin: auto;
    position: absolute;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.24);
    -moz-box-shadow: 0 1px 3px rgba(0,0,0,.24);
    box-shadow: 0 1px 3px rgba(0,0,0,.24);
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-transform-origin: center 600px;
    -moz-transform-origin: center 600px;
    -o-transform-origin: center 600px;
    -ms-transform-origin: center 600px;
    transform-origin: center 350px;
    transition: all 0.5s ease;
}
</style>

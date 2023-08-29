<script>
import MyHeader from './components/MyHeader.vue';
import MyMain from './components/MyMain.vue'

export default {
  components: {
    MyHeader,
    MyMain,
  }
}
</script>

<template>
  <MyHeader></MyHeader>
  <MyMain></MyMain>
</template>

<style lang="scss">
*{
  font-family: 'Bebas Neue', sans-serif;
}
</style>

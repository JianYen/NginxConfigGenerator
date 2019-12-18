<template>
  <div id="bar">
    <b-nav class="nav-tabs">
      <b-nav-item v-bind:active="tab === 1" v-on:click="tab = 1">Link 1</b-nav-item>
      <b-nav-item v-bind:active="tab === 2" v-on:click="tab = 2">Link 2</b-nav-item>
      <b-nav-item v-bind:active="tab === 3" v-on:click="tab = 3">Link 3</b-nav-item>
    </b-nav>
  </div>
</template>

<script>

export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }

}

</script>

<style scoped>

</style>

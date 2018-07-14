<template>
  <div id="app">
    <home/>
    <router-view/>
  </div>
</template>

<script>
import home from '@/pages/Home/home'
export default {
  name: 'App',
  components: {
    home
  }
}
</script>

<style>

</style>

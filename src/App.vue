<template>
  <div id="app">
    <div class="choose">
      <router-link to="/scatter">散点图</router-link>
      <router-link to="/pie">饼图</router-link>
      <router-link to="/line">折线图</router-link>
      <router-link to="/bar">柱状图</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

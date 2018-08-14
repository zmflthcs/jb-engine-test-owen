<template>
<v-app>
<v-content>
<div>
   <h1>News</h1>
    <router-view/>
</div>
</v-content>
</v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
h1{
  padding: 10px;
  background-color: #1D1D1D;
  color: white;
}
</style>

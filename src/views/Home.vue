<template>
  <div class="home">

    <FilterButton/>
    <Headlines/>
  </div>
</template>

<script>
// @ is an alias to /src
import Headlines from '@/components/Headlines.vue'
import FilterButton from '@/components/FilterButton.vue'
export default {
  name: 'home',
  components: {
    Headlines,
    FilterButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

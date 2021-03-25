<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>

export default {
  computed: {
    layout(){
      return (this.$route.meta.layout || 'default') + '-layout'
    }
  },
  components: {
    DefaultLayout: () => import('./layouts/defaultLayout')
  }
}
</script>

<style lang="scss">

</style>

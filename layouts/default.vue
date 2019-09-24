<template>
  <div>
    <TheHeader />
    <div class="body-content">
      <nuxt />
    </div>

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">
.body-content {
  min-height: 100vh;
}
</style>

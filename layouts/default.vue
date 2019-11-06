<template>
  <div>
    <TheHeader />
    <div class="body-content">
      <vue-page-transition :name="$store.state.animation">
        <nuxt />
      </vue-page-transition>
    </div>

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  scrollToTop: true,
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
.body-content {
  min-height: 100vh;
}

mark {
  // background-color: rgba(0, 255, 0, 0.5);
  background-color: rgba(255, 255, 0, 0.4);
  font-weight: 500;
}

em {
  color: #ff663b;
}
</style>

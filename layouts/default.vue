<template>
  <div>
    <TheHeader />
    <div class="body-content">
      <vue-page-transition :name="$store.state.animation">
        <nuxt />
      </vue-page-transition>
    </div>
    <div class="container">
      <adsbygoogle />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import dotProp from 'dotprop'
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  scrollToTop: true,
  components: {
    TheHeader,
    TheFooter
  },
  computed: {
    picture () {
      return dotProp(this.$auth.user, 'picture') || // OpenID
              dotProp(this.$auth.user, 'picture.data.url') || // Facebook graph API
              dotProp(this.$auth.user, 'avatar_url') // GitHub
    }
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

// Questions section global

.normal,
.normal mark,
.normal em,
.normal b,
.normal strong,
.normal p {
  font-family: "Roboto", sans-serif;
  line-height: 1.929;
  font-size: 14px;
  font-style: normal;
  margin-bottom: 0px;
  color: #888888;
  background-color: transparent;
  font-weight: 400;
}

.detailed {
  font-family: "Roboto", sans-serif;
  line-height: 1.929;
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

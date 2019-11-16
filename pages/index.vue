<template>
  <div>
    <TheHero />

    <TheFeatures />

    <TheLearning />

    <TheMemberCount />

    <ThePackages />

    <TheAdvancedFeatures />

    <TheTestimonials />

    <TheBlogSection />
  </div>
</template>

<script>
import TheHero from '~/components/TheHero'
import TheFeatures from '~/components/TheFeatures'
import TheLearning from '~/components/TheLearning'
import TheMemberCount from '~/components/TheMemberCount'
import ThePackages from '~/components/ThePackages'
import TheAdvancedFeatures from '~/components/TheAdvancedFeatures'
import TheTestimonials from '~/components/TheTestimonials'
import TheBlogSection from '~/components/TheBlogSection'
export default {
  scrollToTop: true,
  components: {
    TheHero,
    TheFeatures,
    TheLearning,
    TheMemberCount,
    ThePackages,
    TheAdvancedFeatures,
    TheTestimonials,
    TheBlogSection
  },
  meta: {
    animation: 'fade-in-down'
  }
}
</script>

<style lang="scss" scoped>
</style>

<template>
  <div>
    <!-- breadcrumb start-->
    <section class="breadcrumb breadcrumb_bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb_iner text-center">
              <div class="breadcrumb_iner_item">
                <h2>About Us</h2>
                <p>Home<span>/</span>About Us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- breadcrumb start-->

    <TheFeatures />

    <TheLearning />

    <TheMemberCount />

    <TheTestimonials />
  </div>
</template>

<script>
import TheFeatures from '~/components/TheFeatures'
import TheLearning from '~/components/TheLearning'
import TheMemberCount from '~/components/TheMemberCount'
import TheTestimonials from '~/components/TheTestimonials'

export default {
  scrollToTop: true,
  components: {
    TheFeatures,
    TheLearning,
    TheMemberCount,
    TheTestimonials

  },
  meta: {
    animation: 'fade-in-down'
  }
}
</script>

<template>
  <div>
    <!-- breadcrumb start-->
    <!-- <section class="breadcrumb breadcrumb_bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb_iner text-center">
              <div class="breadcrumb_iner_item">
                <h2>Games</h2>
                <p>Home<span>/</span>Fun Zone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- breadcrumb start-->
    <section class="blog_part section_padding">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-5">
            <div class="section_tittle text-center">
              <p>Fun Zone</p>
              <h2>Fun and Games</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-lg-4 col-xl-4">
            <div class="single-home-blog">
              <div class="card">
                <nuxt-link to="/pericardium-Surgery">
                  <img
                    src="~/assets/img/games/pericardium-Surgery.jpg"
                    class="card-img-top"
                    alt="pericardium-Surgery"
                  >
                </nuxt-link>

                <div class="card-body">
                  <nuxt-link
                    to="/pericardium-Surgery"
                    class="btn_4"
                  >
                    Surgery
                  </nuxt-link>
                  <nuxt-link to="/pericardium-Surgery">
                    <h5 class="card-title">
                      Pericardium Surgery
                    </h5>
                  </nuxt-link>
                  <p>
                    Learn about the heart, it's pericardium and practice surgery all at the same time.
                  </p>
                  <!-- <ul>
                    <li><span class="ti-comments" />2 Comments</li>
                    <li><span class="ti-heart" />2k Like</li>
                  </ul> -->
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-4">
            <div class="single-home-blog">
              <div class="card">
                <nuxt-link to="/shoulder-Surgery">
                  <img
                    src="~/assets/img/games/shoulder-Surgery.jpg"
                    class="card-img-top"
                    alt="pericardium-Surgery"
                  >
                </nuxt-link>

                <div class="card-body">
                  <nuxt-link
                    to="/shoulder-Surgery"
                    class="btn_4"
                  >
                    Surgery
                  </nuxt-link>
                  <nuxt-link to="/shoulder-Surgery">
                    <h5 class="card-title">
                      Shoulder Surgery
                    </h5>
                  </nuxt-link>
                  <p>
                    Learn about the Shoulder and practice surgery all at the same time.
                  </p>
                  <!-- <ul>
                    <li><span class="ti-comments" />2 Comments</li>
                    <li><span class="ti-heart" />2k Like</li>
                  </ul> -->
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="col-sm-6 col-lg-4 col-xl-4">
            <div class="single-home-blog">
              <div class="card">
                <img
                  src="~/assets/img/blog/blog_2.png"
                  class="card-img-top"
                  alt="blog"
                >
                <div class="card-body">
                  <nuxt-link
                    to="#"
                    class="btn_4"
                  >
                    Developing
                  </nuxt-link>
                  <nuxt-link to="blog.html">
                    <h5 class="card-title">
                      All beginning air two likeness
                    </h5>
                  </nuxt-link>
                  <p>
                    Which whose darkness saying were life unto fish wherein all
                    fish of together called
                  </p>
                  <ul>
                    <li><span class="ti-comments" />2 Comments</li>
                    <li><span class="ti-heart" />2k Like</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-4">
            <div class="single-home-blog">
              <div class="card">
                <img
                  src="~/assets/img/blog/blog_3.png"
                  class="card-img-top"
                  alt="blog"
                >
                <div class="card-body">
                  <nuxt-link
                    to="#"
                    class="btn_4"
                  >
                    Design
                  </nuxt-link>
                  <nuxt-link to="blog.html">
                    <h5 class="card-title">
                      Form day seasons sea hand
                    </h5>
                  </nuxt-link>
                  <p>
                    Which whose darkness saying were life unto fish wherein all
                    fish of together called
                  </p>
                  <ul>
                    <li><span class="ti-comments" />2 Comments</li>
                    <li><span class="ti-heart" />2k Like</li>
                  </ul>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  scrollToTop: true,
  components: {

  },
  meta: {
    animation: 'fade-in-down'
  }
}
</script>

<style lang="scss" scoped>
img {
  border: 0.1px solid gray;
  object-fit: cover;
}
</style>

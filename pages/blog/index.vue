
<template>
  <div>
    <!-- eslint-disable vue/no-v-html -->
    <!-- breadcrumb start-->
    <section class="breadcrumb breadcrumb_bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb_iner text-center">
              <div class="breadcrumb_iner_item">
                <h2>Our Blog</h2>
                <p>
                  <nuxt-link to="/">
                    Home
                  </nuxt-link>
                  <span>
                    /
                  </span>
                  Blog
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- breadcrumb start-->

    <!--================Blog Area =================-->
    <section class="blog_area section_padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mb-5 mb-lg-0">
            <div class="blog_left_sidebar">
              <template v-if="$fetchState.pending">
                <article class="article-cards-wrapper">
                  <content-placeholders
                    v-for="p in 10"
                    :key="p"
                    rounded
                    class="blog_item"
                  >
                    <content-placeholders-img />
                    <content-placeholders-heading />
                    <content-placeholders-text :lines="4" />
                  </content-placeholders>
                </article>
              </template>

              <template v-else-if="$fetchState.error">
                <p>{{ $fetchState.error.message }}</p>
              </template>

              <template v-else>
                <article
                  v-for="(post, index) in posts"
                  :key="post.id"
                  class="blog_item"
                >
                  <div class="blog_item_img">
                    <img
                      v-if="post.jetpack_featured_media_url"
                      v-observe-visibility="
                        index === posts.length - 1 ? lazyLoadArticles : false
                      "
                      class="card-img rounded-0"
                      :src="post.jetpack_featured_media_url"
                      :alt="post.title.rendered"
                    >
                    <nuxt-link
                      :to="
                        localePath(
                          {
                            name: 'blog-id',
                            params: { id: post.id },
                          },
                          $i18n.locale
                        )
                      "
                      class="blog_item_date"
                    >
                      <h3>{{ $moment(post.date).format('DD') }}</h3>
                      <p>{{ $moment(post.date).format('MMM/YY') }}</p>
                    </nuxt-link>
                  </div>

                  <div class="blog_details">
                    <nuxt-link
                      class="d-inline-block"
                      :to="
                        localePath(
                          {
                            name: 'blog-id',
                            params: { id: post.id },
                          },
                          $i18n.locale
                        )
                      "
                    >
                      <h2> <span v-html="post.title.rendered" /></h2>
                    </nuxt-link>
                    <div v-html="post.excerpt.rendered" />
                    <ul class="blog-info-link">
                      <li>
                        <nuxt-link to="">
                          <i class="far fa-user" /> Neni
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="">
                          <i class="far fa-comments" /> 0 Comments
                        </nuxt-link>
                      </li>
                    </ul>
                  </div>
                </article>
              </template>

              <template v-if="$fetchState.pending && posts.length">
                <article class="article-cards-wrapper">
                  <content-placeholders
                    v-for="p in 10"
                    :key="p"
                    rounded
                    class="blog_item"
                  >
                    <content-placeholders-img />
                    <content-placeholders-heading />
                    <content-placeholders-text :lines="4" />
                  </content-placeholders>
                </article>
              </template>


              <!-- <article class="blog_item">
                <div class="blog_item_img">
                  <img
                    class="card-img rounded-0"
                    src="~/assets/img/blog/single_blog_2.png"
                    alt=""
                  >
                  <nuxt-link
                    to="#"
                    class="blog_item_date"
                  >
                    <h3>15</h3>
                    <p>Jan</p>
                  </nuxt-link>
                </div>

                <div class="blog_details">
                  <nuxt-link
                    class="d-inline-block"
                    to="/single-blog"
                  >
                    <h2>Google inks pact for new 35-storey office</h2>
                  </nuxt-link>
                  <p>
                    That dominion stars lights dominion divide years for fourth have don't stars is that
                    he earth it first without heaven in place seed it second morning saying.
                  </p>
                  <ul class="blog-info-link">
                    <li>
                      <nuxt-link to="#">
                        <i class="far fa-user" /> Travel, Lifestyle
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="#">
                        <i class="far fa-comments" /> 03 Comments
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </article>

              <article class="blog_item">
                <div class="blog_item_img">
                  <img
                    class="card-img rounded-0"
                    src="~/assets/img/blog/single_blog_3.png"
                    alt=""
                  >
                  <nuxt-link
                    to="#"
                    class="blog_item_date"
                  >
                    <h3>15</h3>
                    <p>Jan</p>
                  </nuxt-link>
                </div>

                <div class="blog_details">
                  <nuxt-link
                    class="d-inline-block"
                    to="/single-blog"
                  >
                    <h2>Google inks pact for new 35-storey office</h2>
                  </nuxt-link>
                  <p>
                    That dominion stars lights dominion divide years for fourth have don't stars is that
                    he earth it first without heaven in place seed it second morning saying.
                  </p>
                  <ul class="blog-info-link">
                    <li>
                      <nuxt-link to="#">
                        <i class="far fa-user" /> Travel, Lifestyle
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="#">
                        <i class="far fa-comments" /> 03 Comments
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </article>

              <article class="blog_item">
                <div class="blog_item_img">
                  <img
                    class="card-img rounded-0"
                    src="~/assets/img/blog/single_blog_4.png"
                    alt=""
                  >
                  <nuxt-link
                    to="#"
                    class="blog_item_date"
                  >
                    <h3>15</h3>
                    <p>Jan</p>
                  </nuxt-link>
                </div>

                <div class="blog_details">
                  <nuxt-link
                    class="d-inline-block"
                    to="/single-blog"
                  >
                    <h2>Google inks pact for new 35-storey office</h2>
                  </nuxt-link>
                  <p>
                    That dominion stars lights dominion divide years for fourth have don't stars is that
                    he earth it first without heaven in place seed it second morning saying.
                  </p>
                  <ul class="blog-info-link">
                    <li>
                      <nuxt-link to="#">
                        <i class="far fa-user" /> Travel, Lifestyle
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="#">
                        <i class="far fa-comments" /> 03 Comments
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </article>

              <article class="blog_item">
                <div class="blog_item_img">
                  <img
                    class="card-img rounded-0"
                    src="~/assets/img/blog/single_blog_5.png"
                    alt=""
                  >
                  <nuxt-link
                    to="#"
                    class="blog_item_date"
                  >
                    <h3>15</h3>
                    <p>Jan</p>
                  </nuxt-link>
                </div>

                <div class="blog_details">
                  <nuxt-link
                    class="d-inline-block"
                    to="/single-blog"
                  >
                    <h2>Google inks pact for new 35-storey office</h2>
                  </nuxt-link>
                  <p>
                    That dominion stars lights dominion divide years for fourth have don't stars is that
                    he earth it first without heaven in place seed it second morning saying.
                  </p>
                  <ul class="blog-info-link">
                    <li>
                      <nuxt-link to="#">
                        <i class="far fa-user" /> Travel, Lifestyle
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="#">
                        <i class="far fa-comments" /> 03 Comments
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </article> -->

              <nav class="blog-pagination justify-content-center d-flex">
                <ul class="pagination">
                  <li class="page-item">
                    <nuxt-link
                      to="#"
                      class="page-link"
                      aria-label="Previous"
                    >
                      <i class="ti-angle-left" />
                    </nuxt-link>
                  </li>
                  <li class="page-item">
                    <nuxt-link
                      to="#"
                      class="page-link"
                    >
                      1
                    </nuxt-link>
                  </li>
                  <li class="page-item active">
                    <nuxt-link
                      to="#"
                      class="page-link"
                    >
                      2
                    </nuxt-link>
                  </li>
                  <li class="page-item">
                    <nuxt-link
                      to="#"
                      class="page-link"
                      aria-label="Next"
                    >
                      <i class="ti-angle-right" />
                    </nuxt-link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="blog_right_sidebar">
              <aside class="single_sidebar_widget search_widget">
                <form action="#">
                  <div class="form-group">
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search Keyword"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Search Keyword'"
                      >
                      <div class="input-group-append">
                        <button
                          class="btn"
                          type="button"
                        >
                          <i class="ti-search" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    class="button rounded-0 primary-bg text-white w-100 btn_1"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </aside>

              <aside class="single_sidebar_widget post_category_widget">
                <h4 class="widget_title">
                  Category
                </h4>
                <ul class="list cat-list">
                  <li>
                    <nuxt-link
                      to="#"
                      class="d-flex"
                    >
                      <p>Resaurant food</p>
                      <p>(37)</p>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      to="#"
                      class="d-flex"
                    >
                      <p>Travel news</p>
                      <p>(10)</p>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      to="#"
                      class="d-flex"
                    >
                      <p>Modern technology</p>
                      <p>(03)</p>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      to="#"
                      class="d-flex"
                    >
                      <p>Product</p>
                      <p>(11)</p>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      to="#"
                      class="d-flex"
                    >
                      <p>Inspiration</p>
                      <p>21</p>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      to="#"
                      class="d-flex"
                    >
                      <p>Health Care (21)</p>
                      <p>09</p>
                    </nuxt-link>
                  </li>
                </ul>
              </aside>

              <aside class="single_sidebar_widget popular_post_widget">
                <h3 class="widget_title">
                  Recent Post
                </h3>
                <div class="media post_item">
                  <img
                    src="~/assets/img/post/post_1.png"
                    alt="post"
                  >
                  <div class="media-body">
                    <nuxt-link to="/single-blog">
                      <h3>From life was you fish...</h3>
                    </nuxt-link>
                    <p>January 12, 2019</p>
                  </div>
                </div>
                <div class="media post_item">
                  <img
                    src="~/assets/img/post/post_2.png"
                    alt="post"
                  >
                  <div class="media-body">
                    <nuxt-link to="/single-blog">
                      <h3>The Amazing Hubble</h3>
                    </nuxt-link>
                    <p>02 Hours ago</p>
                  </div>
                </div>
                <div class="media post_item">
                  <img
                    src="~/assets/img/post/post_3.png"
                    alt="post"
                  >
                  <div class="media-body">
                    <nuxt-link to="/single-blog">
                      <h3>Astronomy Or Astrology</h3>
                    </nuxt-link>
                    <p>03 Hours ago</p>
                  </div>
                </div>
                <div class="media post_item">
                  <img
                    src="~/assets/img/post/post_4.png"
                    alt="post"
                  >
                  <div class="media-body">
                    <nuxt-link to="/single-blog">
                      <h3>Asteroids telescope</h3>
                    </nuxt-link>
                    <p>01 Hours ago</p>
                  </div>
                </div>
              </aside>
              <aside class="single_sidebar_widget tag_cloud_widget">
                <h4 class="widget_title">
                  Tag Clouds
                </h4>
                <ul class="list">
                  <li>
                    <nuxt-link to="#">
                      project
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#">
                      love
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#">
                      technology
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#">
                      travel
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#">
                      restaurant
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#">
                      life style
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#">
                      design
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#">
                      illustration
                    </nuxt-link>
                  </li>
                </ul>
              </aside>

              <aside class="single_sidebar_widget instagram_feeds">
                <h4 class="widget_title">
                  Instagram Feeds
                </h4>
                <ul class="instagram_row flex-wrap">
                  <li>
                    <nuxt-link to="#">
                      <img
                        class="img-fluid"
                        src="~/assets/img/post/post_5.png"
                        alt=""
                      >
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#">
                      <img
                        class="img-fluid"
                        src="~/assets/img/post/post_6.png"
                        alt=""
                      >
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#">
                      <img
                        class="img-fluid"
                        src="~/assets/img/post/post_7.png"
                        alt=""
                      >
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#">
                      <img
                        class="img-fluid"
                        src="~/assets/img/post/post_8.png"
                        alt=""
                      >
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#">
                      <img
                        class="img-fluid"
                        src="~/assets/img/post/post_9.png"
                        alt=""
                      >
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#">
                      <img
                        class="img-fluid"
                        src="~/assets/img/post/post_10.png"
                        alt=""
                      >
                    </nuxt-link>
                  </li>
                </ul>
              </aside>

              <aside class="single_sidebar_widget newsletter_widget">
                <h4 class="widget_title">
                  Newsletter
                </h4>

                <form action="#">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter email'"
                      placeholder="Enter email"
                      required
                    >
                  </div>
                  <button
                    class="button rounded-0 primary-bg text-white w-100 btn_1"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </form>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================Blog Area =================-->
  </div>
</template>

<script>
export default {
  meta: {
    animation: 'fade-in-down'
  },

  data () {
    return {
      currentPage: 1,
      perPage: 20,
      posts: []
    }
  },
  async fetch () {
    const articles = await fetch(`https://students-assistant.com/wp-json/wp/v2/posts?page=${this.currentPage}&per_page=${this.perPage}`).then((res) => res.json())

    this.posts = this.posts.concat(articles)
  },

  fetchOnServer: false,

  methods: {
    lazyLoadArticles (isVisible) {
      if (isVisible) {
        if (this.currentPage < 2) {
          this.currentPage++
          this.$fetch()
        }
      }
    }
  },

}
</script>

<style lang="scss" scoped>
</style>

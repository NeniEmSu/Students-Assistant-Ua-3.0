<template>
  <header
    id="nav"
    v-click-outside="closeMobileNavbar"
    v-handle-scroll="closeMobileNavbar"
    class="main_menu home_menu menu_fixed animated fadeInDown"
  >
    <div class=" container">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <nav class="navbar navbar-expand-lg navbar-light ">
            <nuxt-link
              class="navbar-brand"
              to="/"
            >
              <img
                src="~/assets/img/sta-logo.svg"
                alt="Students assistant logo"
                class="img-fluid"
              >
            </nuxt-link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              :aria-expanded="[mobileNavOpen ? true : false]"
              aria-label="Toggle navigation"
              :class="{collapsed : mobileNavOpen}"
              @click="mobileNavOpen = !mobileNavOpen"
            >
              <span class="navbar-toggler-icon" />
            </button>

            <div
              id="navbarSupportedContent"
              class="collapse navbar-collapse main-menu-item justify-content-end"
              :class="{show : mobileNavOpen}"
            >
              <ul class="navbar-nav align-items-center">
                <li class="nav-item active">
                  <nuxt-link
                    class="nav-link"
                    to="/"
                  >
                    Home
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link
                    class="nav-link"
                    to="/about"
                  >
                    About
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link
                    class="nav-link"
                    to="/practice"
                  >
                    Practice
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link
                    class="nav-link"
                    to="/blog"
                  >
                    Blog
                  </nuxt-link>
                </li>
                <li class="nav-item dropdown">
                  <button
                    id="navbarDropdown"
                    class="nav-link dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Services
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <nuxt-link
                      class="dropdown-item"
                      to="/research-work"
                    >
                      Research Work
                    </nuxt-link>
                    <nuxt-link
                      class="dropdown-item"
                      to="elements.html"
                    >
                      Exam Center
                    </nuxt-link>
                    <nuxt-link
                      class="dropdown-item"
                      to="/exam-center"
                    >
                      Calculators
                    </nuxt-link>
                    <nuxt-link
                      class="dropdown-item"
                      to="/fun-zone"
                    >
                      Fun Zone
                    </nuxt-link>
                  </div>
                </li>
                <li class="nav-item">
                  <nuxt-link
                    class="nav-link"
                    to="/contact"
                  >
                    Contact
                  </nuxt-link>
                </li>
                <li class="d-none d-lg-block">
                  <nuxt-link
                    class="btn_1"
                    to="/sign-up"
                  >
                    Sing Up
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import clickOutside from '@/directives/click-outside'
import handleScroll from '@/directives/handle-scroll'
export default {
  components: {},
  directives: {
    clickOutside,
    handleScroll
  },
  data () {
    return {
      mobileNavOpen: false,
      lastScrollPosition: 0
    }
  },
  watch: {
    $route () {
      this.mobileNavOpen = false
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
    this.$nextTick(function () {
      window.addEventListener('scroll', function () {
        const navbar = document.getElementById('nav')
        const navClasses = navbar.classList
        if (document.documentElement.scrollTop >= 100) {
          if (navClasses.contains('menu_fixed') === false) {
            navClasses.toggle('menu_fixed')
          }
        } else if (navClasses.contains('menu_fixed') === true) {
          navClasses.toggle('menu_fixed')
        }
      })
    })
  },

  methods: {
    closeUserDropdown () {
      this.userDropdownOpen = false
    },
    closeMobileNavbar () {
      this.mobileNavOpen = false
    },
    hide () {
      this.mobileNavOpen = false
    },

    onScroll () {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 30) {
        return
      }
      this.showHeader = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    }
  }
}
</script>

<style lang="scss" scoped>
a.nav-link.nuxt-link-exact-active.nuxt-link-active {
  color: #ee390f !important;
}

.navbar-light .navbar-nav .show > .nav-link,
.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .nav-link.active {
  color: grey;
}

button.dropdown-toggle {
  border: none;
  background: none;
  outline: none;
}

@media screen and (max-width: 770px) {
  img {
    width: 200px;
    height: auto;
  }
}

@media screen and (max-width: 425px) {
  img {
    width: 150px;
    height: auto;
  }
}
</style>

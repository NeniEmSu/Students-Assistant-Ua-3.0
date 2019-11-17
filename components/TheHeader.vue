<template>
  <header
    id="nav"
    v-click-outside="closeMobileNavbar"
    v-handle-scroll="closeMobileNavbar"
    class="main_menu home_menu "
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
            <template v-if="$auth.$state.loggedIn">
              <b-img
                :src="picture"
                class="d-block d-lg-none ml-auto mr-2"
                rounded="circle"
                width="40px"
                height="40px"
              />
            </template>
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
                <li class="nav-item dropdown">
                  <button
                    id="navbarDropdown"
                    class="nav-link dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Exam Center
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <nuxt-link
                      class="dropdown-item"
                      to="/krok1"
                    >
                      Krok 1 general practice
                    </nuxt-link>
                    <nuxt-link
                      class="dropdown-item"
                      to="/krok2"
                    >
                      Krok 2 general practice
                    </nuxt-link>
                    <nuxt-link
                      class="dropdown-item"
                      to="/krok2Pediatrics"
                    >
                      krok 2 Pediatrics
                    </nuxt-link>
                    <nuxt-link
                      class="dropdown-item"
                      to="/semesterExam"
                    >
                      Semester Exam
                    </nuxt-link>
                    <nuxt-link
                      class="dropdown-item"
                      to="/plab"
                    >
                      Plab
                    </nuxt-link>
                  </div>
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
                <template v-if="$auth.$state.loggedIn">
                  <b-nav-item-dropdown class=" d-block d-lg-none" :text="$auth.user.name" right>
                    <b-dropdown-item @click="$auth.logout()">
                      Logout
                    </b-dropdown-item>
                  </b-nav-item-dropdown>
                </template>
                <template v-else>
                  <li class="nav-item d-block d-lg-none">
                    <nuxt-link
                      class="nav-link"
                      to="/login"
                    >
                      <strong>Sign Up/in</strong>
                    </nuxt-link>
                  </li>
                </template>
                <template v-if="$auth.$state.loggedIn">
                  <b-nav-item-dropdown class="d-none d-lg-block" :text="$auth.user.name" right>
                    <b-dropdown-item @click="$auth.logout()">
                      Logout
                    </b-dropdown-item>
                  </b-nav-item-dropdown>
                  <b-img :src="picture" class="d-none d-lg-block" rounded="circle" width="30px" height="30px" />
                </template>
                <template v-else>
                  <li class="d-none d-lg-block">
                    <nuxt-link
                      class="btn_1"
                      to="/login"
                    >
                      Sign Up/in
                    </nuxt-link>
                  </li>
                </template>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import dotProp from 'dotprop'
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

  computed: {
    picture () {
      return dotProp(this.$auth.user, 'picture') || // OpenID
              dotProp(this.$auth.user, 'picture.data.url') || // Facebook graph API
              dotProp(this.$auth.user, 'avatar_url') // GitHub
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
        if (document.documentElement.scrollTop >= 160) {
          if (navClasses.contains('menu_fixed') === false) {
            navClasses.toggle('menu_fixed')
            navClasses.toggle('animated')
            navClasses.toggle('fadeInDown')
          }
        } else if (navClasses.contains('menu_fixed') === true) {
          navClasses.toggle('menu_fixed')
          navClasses.toggle('animated')
          navClasses.toggle('fadeInDown')
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
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
}

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

.navbar-brand img {
  width: 150px;
  height: auto;
}

@media screen and (max-width: 770px) {
  .navbar-brand img {
    width: 125px;
    height: auto;
  }
}

@media screen and (max-width: 425px) {
  .navbar-brand img {
    width: 100px;
    height: auto;
  }
}
</style>

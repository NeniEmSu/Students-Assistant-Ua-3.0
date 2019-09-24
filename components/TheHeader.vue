<template>
  <header class="main_menu home_menu">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <nav class="navbar navbar-expand-lg navbar-light">
            <nuxt-link
              class="navbar-brand"
              to="index.html"
            >
              <img
                src="~/assets/img/SAUA.svg"
                alt="logo"
              >
            </nuxt-link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </button>

            <div
              id="navbarSupportedContent"
              class="collapse navbar-collapse main-menu-item justify-content-end"
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
                  <nuxt-link
                    id="navbarDropdown"
                    class="nav-link dropdown-toggle"
                    to="blog.html"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Services
                  </nuxt-link>
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

<style>
.VueToNuxtLogo {
  display: inline-block;
  animation: turn 2s linear forwards 1s;
  transform: rotateX(180deg);
  position: relative;
  overflow: hidden;
  height: 180px;
  width: 245px;
}

.Triangle {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
}

.Triangle--one {
  border-left: 105px solid transparent;
  border-right: 105px solid transparent;
  border-bottom: 180px solid #41b883;
}

.Triangle--two {
  top: 30px;
  left: 35px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 87.5px solid transparent;
  border-right: 87.5px solid transparent;
  border-bottom: 150px solid #3b8070;
}

.Triangle--three {
  top: 60px;
  left: 35px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 70px solid transparent;
  border-right: 70px solid transparent;
  border-bottom: 120px solid #35495e;
}

.Triangle--four {
  top: 120px;
  left: 70px;
  animation: godown 0.5s linear forwards 3s;
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  border-bottom: 60px solid #fff;
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes godown {
  100% {
    top: 180px;
  }
}

@keyframes goright {
  100% {
    left: 70px;
  }
}
</style>

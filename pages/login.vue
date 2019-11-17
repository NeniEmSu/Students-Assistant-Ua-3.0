<template>
  <div>
    <section class="banner_part">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-xl-6">
            <div class="banner_text">
              <div class="banner_text_iner">
                <h5>
                  Sign in/up manually or with your top social accounts.
                </h5>
                <h1>Aunthentication</h1>
                <div class="form-box">
                  <div class="button-box">
                    <div id="btn" />
                    <button
                      type="button"
                      class="toggle-button"
                      @click="toggleLogin"
                    >
                      Sign In
                    </button>
                    <button
                      type="button"
                      class="toggle-button"
                      @click="toggleRegister"
                    >
                      Sign Up
                    </button>
                  </div>
                  <h3 class="text-center">
                    Social Auth
                  </h3>
                  <!-- <div class="social-icons">
                    <img
                      src="~/assets/img/login/fb.png"
                      alt="facebook Icon"
                      style="cursor: pointer;"
                      @click="$auth.loginWith('facebook')"
                    >
                    <img
                      src="~/assets/img/login/tw.png"
                      alt="Twitter Icon"
                      style="cursor: pointer;"
                      @click="$auth.loginWith('twitter')"
                    >
                    <img
                      src="~/assets/img/login/gp.png"
                      alt="Google Icon"
                      style="cursor: pointer;"
                      @click="$auth.loginWith('google')"
                    >
                  </div> -->

                  <div v-for="s in strategies" :key="s.key" class="mb-2">
                    <b-btn block :style="{background: s.color}" class="login-button" @click="$auth.loginWith(s.key)">
                      Login with {{ s.name }}
                    </b-btn>
                  </div>

                  <div class="or-hr">
                    <span>
                      or
                    </span>
                  </div>  <form
                    id="signin"
                    class="input-group"
                  >
                    <input
                      type="text"
                      class="input-field"
                      placeholder="User Name"
                      required
                    >
                    <input
                      type="text"
                      class="input-field"
                      placeholder="Password"
                      required
                    >
                    <input
                      id="remember"
                      type="checkbox"
                      class="checkbox"
                      name="remember"
                    ><span>Remember Password</span>
                    <button
                      type="submit"
                      class="submit-button"
                    >
                      Sign In
                    </button>
                  </form>
                  <form
                    id="signup"
                    class="input-group"
                  >
                    <input
                      type="text"
                      class="input-field"
                      placeholder="User Name"
                      required
                    >
                    <input
                      type="email"
                      class="input-field"
                      placeholder="Email"
                      required
                    >
                    <input
                      type="text"
                      class="input-field"
                      placeholder="Password"
                      required
                    >
                    <input
                      id="remember"
                      type="checkbox"
                      class="checkbox"
                      name="remember"
                    ><span>I agree to the terms and conditions</span>
                    <button
                      type="submit"
                      class="submit-button"
                    >
                      Sign up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ThePackages />
  </div>
</template>

<script>
import ThePackages from '~/components/ThePackages'
export default {
  components: {
    ThePackages
  },
  middleware: ['auth'],
  data () {
    return {
      username: '',
      password: '123',
      error: null
    }
  },
  computed: {
    strategies: () => ([
      // { key: 'auth0', name: 'Auth0', color: '#ec5425' },
      { key: 'google', name: 'Google', color: '#4284f4' },
      { key: 'facebook', name: 'Facebook', color: '#3c65c4' }
      // { key: 'github', name: 'GitHub', color: '#202326' }
    ]),
    redirect () {
      return (
        this.$route.query.redirect &&
        decodeURIComponent(this.$route.query.redirect)
      )
    },
    isCallback () {
      return Boolean(this.$route.query.callback)
    }
  },

  methods: {

    toggleRegister () {
      if (process.client) {
        const x = document.getElementById('signin')
        const y = document.getElementById('signup')
        const z = document.getElementById('btn')

        x.style.left = '-400px'
        y.style.left = '50px'
        z.style.left = '110px'
      }
    },

    toggleLogin () {
      if (process.client) {
        const x = document.getElementById('signin')
        const y = document.getElementById('signup')
        const z = document.getElementById('btn')

        x.style.left = '50px'
        y.style.left = '450px'
        z.style.left = '0px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 991px){
.banner_part:after {

    background-image: none;

}}

.form-box {
  width: 380px;
  height: 480px;
  position: relative;
  margin: 2% 0;
  background: #ffffff;
  padding: 5px;
  box-shadow: 0 0 20px 9px rgba(238, 57, 15, 0.4);
  border-radius: 15px;
  overflow: hidden;

  @media screen and (max-width: 991px) {
    margin: 2% auto;
  }

  @media screen and (max-width: 400px) {
    margin: 5% auto;
    width: 100%;
  }
}

.button-box {
  width: 220px;
  margin: 35px auto;
  position: relative;
  box-shadow: 0 0 20px 9px rgb(238, 57, 15);
  border-radius: 30px;
  border: 0;
  outline: none;
}

.toggle-button {
  padding: 10px 30px;
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: none;
  position: relative;
}

#btn {
  top: 0;
  left: 0;
  position: absolute;
  height: 100%;
  width: 110px;
  border-radius: 30px;
  background-image: -webkit-gradient(
    linear,
    right top,
    left top,
    from(#ee390f),
    color-stop(51%, #f9b700),
    to(#ee390f)
  );
  background-image: linear-gradient(
    to left,
    #ee390f 0%,
    #f9b700 51%,
    #ee390f 100%
  );
  transition: all 0.5s ease-in-out;
  background-size: 190% auto;
}

.social-icons {
  margin: 15px auto;
  text-align: center;

  img {
    width: 30px;
    margin: 0 12px;
    box-shadow: 0 0 20px 0px #7f7f7f3d;
    border-radius: 50%;
  }
}

.or-hr {
  margin: 30px auto;
  height: 1px;
  border-bottom: 1px solid #eee;
  position: relative;
  text-align: center;
  user-select: none;
  cursor: default;

  span{
color: $heading_color2;
  }

}

.input-group {
  top: 240px;
  position: absolute;
  width: 280px;
  transition: 0.5s;

  @media screen and (max-width: 380px) {
    width: 240px;
  }

  @media screen and (max-width: 320px) {
    width: 200px;
  }
}

.input-field {
  width: 100%;
  padding: 10px 0;
  margin: 5px 0;
  border: 0;
  border-bottom: 1px solid #999;
  outline: none;
  background: transparent;
}

.submit-button {
  width: 85%;
  padding: 10px 30px;
  cursor: pointer;
  display: block;
  margin: auto;
  background-image: -webkit-gradient(
    linear,
    right top,
    left top,
    from(#ee390f),
    color-stop(51%, #f9b700),
    to(#ee390f)
  );
  background-image: linear-gradient(
    to left,
    #ee390f 0%,
    #f9b700 51%,
    #ee390f 100%
  );
  border-radius: 30px;
  border: 0;
  outline: none;
  transition: all 0.4s ease-in-out;
  text-transform: capitalize;
  background-size: 200% auto;
  border: 1px solid transparent;
  box-shadow: 0px 12px 20px 0px rgba(255, 126, 95, 0.15);

  &:hover {
    color: #fff !important;
    background-position: right center;
    box-shadow: 0px 10px 30px 0px rgba(193, 34, 10, 0.2);
  }
}

.checkbox {
  margin: 3px 10px 30px 0;
}

span {
  color: #777;
  font-size: 12px;
}

#signin {
  left: 50px;
}

#signup {
  left: 450px;
}
</style>

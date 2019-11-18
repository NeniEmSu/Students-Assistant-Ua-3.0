<template>
  <div>
    <section class="mt-5 pt-5">
      <div class="container">
        <h5 class="text-center">
          Sign in/up manually or with your top social accounts.
        </h5>
        <h1 class="text-center">
          Aunthentication
        </h1>
        <div>
          <hr>
          <b-alert v-if="error" show variant="danger">
            {{ error + '' }}
          </b-alert>
          <b-alert v-if="$auth.$state.redirect" show>
            You have to login before accessing to <strong>{{ $auth.$state.redirect }}</strong>
          </b-alert>
          <b-row align-h="center" class="center pt-4">
            <b-col md="4">
              <b-card bg-variant="light">
                <busy-overlay />
                <form @keydown.enter="login">
                  <b-form-group label="Username">
                    <b-input ref="username" v-model="username" placeholder="anything" />
                  </b-form-group>

                  <b-form-group label="Password">
                    <b-input v-model="password" type="password" placeholder="123" />
                  </b-form-group>

                  <div class="text-center">
                    <b-btn variant="primary" block @click="login">
                      Login
                    </b-btn>
                  </div>
                </form>
              </b-card>
            </b-col>
            <b-col md="1" align-self="center">
              <div class="text-center">
                <b-badge pill>
                  OR
                </b-badge>
              </div>
            </b-col>
            <b-col md="4" class="text-center">
              <b-card title="Social Login" bg-variant="light">
                <div v-for="s in strategies" :key="s.key" class="mb-2">
                  <b-btn block :style="{background: s.color}" class="login-button" @click="$auth.loginWith(s.key)">
                    Login with {{ s.name }}
                  </b-btn>
                </div>
              </b-card>
            </b-col>
          </b-row>
        </div>
        <!-- <div class="form-box">
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
                  </h3> -->
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

        <!-- <div v-for="s in strategies" :key="s.key" class="mb-2 mx-auto">
                    <b-btn block :style="{background: s.color}" class="login-button w-75 mx-auto" @click="$auth.loginWith(s.key)">
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
                </div> -->
      </div>
    </section>
    <ThePackages />
  </div>
</template>

<script>
import ThePackages from '~/components/ThePackages'
import busyOverlay from '~/components/busy-overlay'

export default {
  middleware: ['auth'],
  components: { busyOverlay, ThePackages },
  data () {
    return {
      username: '',
      password: '123',
      error: null
    }
  },
  computed: {
    strategies: () => ([
      { key: 'auth0', name: 'Auth0', color: '#ec5425' },
      { key: 'google', name: 'Google', color: '#4284f4' },
      { key: 'facebook', name: 'Facebook', color: '#3c65c4' },
      { key: 'github', name: 'GitHub', color: '#202326' }
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
    // eslint-disable-next-line require-await
    async login () {
      this.error = null

      return this.$auth.loginWith('local', {
        data: {
          username: this.username,
          password: this.password
        }
      })
        .catch((e) => {
          this.error = e + ''
        })
    },
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

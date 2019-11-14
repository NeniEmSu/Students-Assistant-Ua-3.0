<template>
  <div>
    <div class="amboss-body">
      <div class="amboss-inner">
        <div class="amboss-auth amboss-signin">
          <div class="amboss-authform">
            <div class="amboss-jumbotron">
              <div class="text-center mt-5">
                <h1 class="text-center">
                  User Authentication
                </h1>
              </div>
            </div>

            <div class="form-box">
              <div class="button-box">
                <div id="btn" />
                <button
                  type="button"
                  class="toggle-button"
                  @click="login"
                >
                  Sign In
                </button>
                <button
                  type="button"
                  class="toggle-button"
                  @click="register"
                >
                  Sign Up
                </button>
              </div>
              <h3 class="text-center">
                Social Auth
              </h3>
              <div class="social-icons">
                <a href="#"><img
                  src="~/assets/img/login/fb.png"
                  alt="facebook Icon"
                ></a>
                <a href="#"><img
                  src="~/assets/img/login/tw.png"
                  alt="Twitter Icon"
                ></a>
                <a href="#"><img
                  src="~/assets/img/login/gp.png"
                  alt="Google Icon"
                ></a>
              </div>

              <div class="amboss-hr">
                <span>
                  or </span>
              </div>
              <form
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
    <ThePackages />
  </div>
</template>

<script>
import ThePackages from '~/components/ThePackages'
export default {
  components: {
    ThePackages
  },
  methods: {

    register () {
      if (process.client) {
        const x = document.getElementById('signin')
        const y = document.getElementById('signup')
        const z = document.getElementById('btn')

        x.style.left = '-400px'
        y.style.left = '50px'
        z.style.left = '110px'
      }
    },

    login () {
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
.amboss-body {
  // background: url(~assets/img/login/auth.jpg) no-repeat center center fixed;
  background: url(~assets/img/login/login.jpg) no-repeat top  center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.amboss-body {
  display: table;
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
// .amboss-body {
//   background: url(https://sf-static-us.amboss.com/images/backgrounds/auth_v2.jpg)
//     no-repeat center center fixed;
//   -webkit-background-size: cover;
//   -moz-background-size: cover;
//   -o-background-size: cover;
//   background-size: cover;
// }

.form-box {
  width: 380px;
  height: 480px;
  position: relative;
  margin: 2% auto;
  background: #ffffff;
  padding: 5px;
  box-shadow: 0 0 20px 9px rgba(238, 57, 15, 0.4);
  border-radius: 15px;
  overflow: hidden;

  @media screen and (max-width: 400px) {
    margin: auto;
    width: 100%;
  }
}

.button-box {
  width: 220px;
  margin: 35px auto;
  position: relative;
  box-shadow: 0 0 20px 9px rgb(238, 57, 15);
  border-radius: 30px;
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
  background-size: 200% auto;
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

.input-group {
  top: 240px;
  position: absolute;
  width: 280px;
  transition: 0.5s;
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
  // background: linear-gradient(to right, #ff105f, #ffad06);
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

.amboss-auth {
  height: 100%;
  position: relative;
  font-size: 0.9375em;
  *zoom: 1;
  min-height: 580px;
  padding-top: 40px;
}

.amboss-authform {
  display: inline-block;
  position: relative;
  min-height: 400px;
  width: 360px;
  color: #8a8a8a;
  box-sizing: border-box;
  margin-left: 10%;
  margin-top: 2.5%;
}

.amboss-auth {
  height: 100%;
  position: relative;
  font-size: 0.9375em;
  *zoom: 1;
  min-height: 580px;
  padding-top: 40px;
}

@media screen and (max-width: 1023px) {
  .amboss-desktop-only,
  .amboss-mobile-only {
    display: none;
  }
}

.amboss-authform .amboss-form {
  background-color: #fff;
  border: 2px solid #00bdf4;
}
.amboss-form {
  display: block;
  padding: 20px;
}

.amboss-hidden {
  display: none;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  left: -9999px;
}

.amboss-field {
  width: 100%;
  display: block;
  margin-bottom: 10px;
}
.amboss-field,
.amboss-form,
.amboss-list,
.amboss-list > ul,
.amboss-panel {
  *zoom: 1;
}

.amboss-authform .amboss-form .amboss-input-addon,
.amboss-authform .amboss-field input[type="text"],
.amboss-authform .amboss-field input[type="password"] {
  border-color: #00bdf4;
  border-radius: 0;
}

.amboss-authform .amboss-form .amboss-input-addon,
.amboss-authform .amboss-field input[type="text"],
.amboss-authform .amboss-field input[type="password"] {
  border-color: #00bdf4;
  border-radius: 0;
}
.amboss-input-addon {
  position: relative;
  display: table;
  width: 100%;
  border: 1px solid #ddd;
  transition: border-color 0.2s ease-out;
  vertical-align: middle;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}

.amboss-field {
  width: 100%;
  display: block;
  margin-bottom: 10px;
}
.amboss-field,
.amboss-form,
.amboss-list,
.amboss-list > ul,
.amboss-panel {
  *zoom: 1;
}

.amboss-authform .amboss-hr {
  margin-top: 35px;
  margin-bottom: 30px;
  border-color: #dedede;
}
.amboss-hr {
  margin: 10px auto;
  height: 1px;
  border-bottom: 1px solid #eee;
  position: relative;
  text-align: center;
  user-select: none;
  cursor: default;
}

.amboss-authform .amboss-call-to-action {
  display: block;
  font-size: 1em;
  color: #00bdf4;
  text-align: center;
  text-decoration: none;
  line-height: 1.2em;
  margin-bottom: 0.5em;
}

.amboss-authform a {
  text-decoration: none;
  color: #00bdf4;
}
.amboss-siderbar,
a {
  color: inherit;
  text-decoration: inherit;
}
a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}

.amboss-auth.amboss-signin .amboss-button--flat,
.amboss-auth.amboss-signup .amboss-button--flat,
.amboss-auth.amboss-password-forgotten .amboss-button--flat {
  background-color: #00bdf4;
}
.amboss-button.amboss-button--flat {
  text-shadow: none;
  box-shadow: none;
}

.amboss-button.amboss-button--full {
  width: 100%;
}
.amboss-button.amboss-button--small {
  padding: 2.5px 5px;
  font-size: 75%;
}
.amboss-button {
  position: relative;
  display: inline-block;
  vertical-align: top;
  line-height: 1.5em;
  font-size: 1em;
  padding: 5px 10px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  background-clip: padding-box;
  border: 1px solid;
  cursor: pointer;
  box-shadow: inset 0 1px hsla(0, 0%, 100%, 0.1),
    inset 0 0 0 1px hsla(0, 0%, 100%, 0.08), 0 1px 2px rgba(0, 0, 0, 0.25);
  background: #0bbbef;
  text-shadow: 0 -1px #0aa8d7;
  border-color: #0aa8d7;
  transition: background 0.2s ease-out;
}

@media screen and (max-width: 768px) {
  .amboss-auth {
    margin-top: 40px;
    position: relative;
    margin-left: 0;
    min-height: 350px;
  }
}

@media screen and (max-width: 768px) {
  .amboss-authform {
    position: relative;
    left: auto;
    bottom: auto;
    margin: 0;
    width: 100%;
    height: 100%;
    box-shadow: none;
    overflow: visible;
  }
}

@media screen and (max-width: 768px) {
  .amboss-jumbotron,
  .de_DE .amboss-jumbotron {
    background: none;
    width: auto;
    height: auto;
    margin-bottom: 0;
    padding: 0 10px;
  }
}

@media screen and (max-width: 768px) {
  .amboss-mobile-only,
  .amboss-mobile-visible {
    display: block;
  }
}
@media screen and (max-width: 1023px) {
  .amboss-desktop-only,
  .amboss-mobile-only {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .amboss-mobile-only,
  .amboss-mobile-visible {
    display: block;
  }
}
@media screen and (max-width: 1023px) {
  .amboss-desktop-only,
  .amboss-mobile-only {
    display: none;
  }
}
</style>

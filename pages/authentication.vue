<template>
  <div id="authentication">
    <h1 class="my-5 pt-5 text-center text-light">
      User Authentication
    </h1>
    <div class="form-box">
      <div class="button-box">
        <div id="btn" />
        <button
          type="button"
          class="toggle-button"
        >
          Sign In
        </button>
        <button
          type="button"
          class="toggle-button"
        >
          Sign Up
        </button>
      </div>
      <div class="social-icons">
        <img
          src="~/assets/img/login/fb.png"
          alt="facebook Icon"
        >
        <img
          src="~/assets/img/login/tw.png"
          alt="Twitter Icon"
        >
        <img
          src="~/assets/img/login/gp.png"
          alt="Google Icon"
        >
      </div>

      <form class="input-group">
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
          name="remember"
        ><span>Remember Password</span>
      </form>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
#authentication {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(~assets/img/login/banner.jpg);
  background-position: center;
  background-size: cover;
  position: absolute;
}

.form-box {
  width: 380px;
  height: 480px;
  position: relative;
  margin: 2% auto;
  background: #ffffff;
  padding: 5px;
  box-shadow: 0 0 20px 9px rgba(255, 97, 36, 0.4);
  border-radius: 15px;
}

.button-box {
  width: 220px;
  margin: 35px auto;
  position: relative;
  box-shadow: 0 0 20px 9px #ff6124;
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
  background: linear-gradient(to right, #ff105f, #ffad06);
  transition: 0.5s;
}

.social-icons {
  margin: 30px auto;
  text-align: center;

  img {
    width: 30px;
    margin: 0 12px;
    box-shadow: 0 0 20px 0px #7f7f7f3d;
    border-radius: 50%;
  }
}

.input-group {
  top: 180px;
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
}
</style>

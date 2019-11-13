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
</style>

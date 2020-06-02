<template>
  <div class="overlay">
    <div class="text-center m-auto">
      <img src="~/assets/img/loading.svg" alt="Loading...">
      <h3>Loading...</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overlay {
  position: relative;;
  background-color: rgba(255, 255, 255, 0.5);
  color: grey;
  display: block;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  margin: 120px auto 0 auto;
}
</style>

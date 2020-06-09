<template>
  <div>
    <TheHeader />
    <div class="body-content">
      <vue-page-transition :name="$store.state.animation">
        <nuxt />
      </vue-page-transition>
    </div>
    <div class="container">
      <adsbygoogle />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import dotProp from 'dotprop'
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  scrollToTop: true,
  components: {
    TheHeader,
    TheFooter
  },
  computed: {
    picture () {
      return dotProp(this.$auth.user, 'picture') || // OpenID
              dotProp(this.$auth.user, 'picture.data.url') || // Facebook graph API
              dotProp(this.$auth.user, 'avatar_url') // GitHub
    }
  }
}
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
.body-content {
  min-height: 100vh;
}

// Questions section global

.detailed {
  font-family: "Roboto", sans-serif;
  line-height: 1.929;
  font-size: 1rem;
  font-style: normal;
  margin-bottom: 0px;
  color: #888888;
  background-color: transparent;
  font-weight: 400;

  // * {
  //   font-size: 1rem;
  // }
}

.normal,
// .normal *,
.normal mark,
.normal em,
.normal b,
.normal strong,
.normal p {
  font-family: "Roboto", sans-serif;
  line-height: 1.929;
  font-size: 1rem;
  font-style: normal;
  margin-bottom: 0px;
  color: #888888;
  background-color: transparent;
  font-weight: 400;
}
mark {
  // background-color: rgba(0, 255, 0, 0.5);
  background-color: rgba(255, 255, 0, 0.4);
  font-weight: 500;
}

em {
  color: #ff663b;
}

table {  
    color: #333;
    font-family: Helvetica, Arial, sans-serif;
    width: 640px; 
    border-collapse: 
    collapse; border-spacing: 0; 
}

td, th {  
    border: 1px solid transparent; /* No more visible border */
    height: 30px; 
    transition: all 0.3s;  /* Simple transition for hover effect */
}

th {  
    background: #DFDFDF;  /* Darken header a bit */
    font-weight: bold;
}

td {  
    background: #FAFAFA;
    text-align: center;
}

/* Cells in even rows (2,4,6...) are one color */        
tr:nth-child(even) td { background: #F1F1F1; }   

/* Cells in odd rows (1,3,5...) are another (excludes header cells)  */        
tr:nth-child(odd) td { background: #FEFEFE; }  

tr td:hover,
tr td p:hover,
tr td:hover p { background: #666; color: #FFF; }  

button.btn:disabled,
.b-button:disabled {
  cursor: not-allowed;
}
</style>

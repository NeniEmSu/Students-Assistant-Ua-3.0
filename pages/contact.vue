<template>
  <div>
    <!-- breadcrumb start-->
    <section class="breadcrumb breadcrumb_bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb_iner text-center">
              <div class="breadcrumb_iner_item">
                <h2>Contact us</h2>
                <p>Home<span>/<span>Contact us</span></span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- breadcrumb start-->

    <!-- ================ contact section start ================= -->
    <section class="contact-section section_padding">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="contact-title">
              Get in Touch
            </h2>
          </div>
          <div class="col-lg-8">
            <form
              id="contactForm"
              class="form-contact contact_form"
              action="contact_process.php"
              method="post"
              novalidate="novalidate"
            >
              <div class="row">
                <div class="col-12">
                  <div class="form-group">
                    <textarea
                      id="message"
                      class="form-control w-100"
                      name="message"
                      cols="30"
                      rows="9"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter Message'"
                      placeholder="Enter Message"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      id="name"
                      class="form-control"
                      name="name"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter your name'"
                      placeholder="Enter your name"
                    >
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      id="email"
                      class="form-control"
                      name="email"
                      type="email"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter email address'"
                      placeholder="Enter email address"
                    >
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <input
                      id="subject"
                      class="form-control"
                      name="subject"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter Subject'"
                      placeholder="Enter Subject"
                    >
                  </div>
                </div>
              </div>
              <div class="form-group mt-3">
                <button
                  type="submit"
                  class="button button-contactForm btn_1"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div class="col-lg-4">
            <div class="media contact-info">
              <span class="contact-info__icon"><i class="ti-home" /></span>
              <div class="media-body">
                <h3>Ternopil, ukraine.</h3>
                <p>Zhivova 3, TA 46001</p>
              </div>
            </div>
            <div class="media contact-info">
              <span class="contact-info__icon"><i class="ti-tablet" /></span>
              <div class="media-body">
                <h3>38 (093) 2589 266</h3>
                <p>Mon to Sat 9am to 6pm</p>
              </div>
            </div>
            <div class="media contact-info">
              <span class="contact-info__icon"><i class="ti-email" /></span>
              <div class="media-body">
                <h3>info@studentsassistantua.com</h3>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ================ contact section end ================= -->
  </div>
</template>

<script>
export default {

}
</script>

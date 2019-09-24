<template>
  <footer class="footer-area">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-sm-6 col-md-4 col-xl-3">
          <div class="single-footer-widget footer_1">
            <a href="index.html">
              <img
                src="~/assets/img/SAUA.svg"
                alt=""
              >
            </a>
            <p>
              Your one stop for all things education and personal improvement.
            </p>
            <p>
              Students Assistant UA
            </p>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-xl-4">
          <div class="single-footer-widget footer_2">
            <h4>Newsletter</h4>
            <p>
              Stay updated with our latest trends Seed heaven so said place winged over given forth fruit.
            </p>
            <form action="#">
              <div class="form-group">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter email address"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter email address'"
                  >
                  <div class="input-group-append">
                    <button
                      class="btn btn_1"
                      type="button"
                    >
                      <i class="ti-angle-right" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div class="social_icon">
              <a href="#"> <i class="ti-facebook" /> </a>
              <a href="#"> <i class="ti-twitter-alt" /> </a>
              <a href="#"> <i class="ti-instagram" /> </a>
              <a href="#"> <i class="ti-skype" /> </a>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-md-4">
          <div class="single-footer-widget footer_2">
            <h4>Contact us</h4>
            <div class="contact_info">
              <p><span> Address :</span> Ternopil City Ukraine</p>
              <p><span> Phone :</span> +38 093 258 9266 </p>
              <p><span> Email : </span>info@studentsassistantus.com </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="copyright_part_text text-center">
            <div class="row">
              <div class="col-lg-12">
                <p class="footer-text m-0">
                  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                  Copyright &copy;
                  {{ (new Date().getFullYear()) }}
                  All rights reserved | This template is made with <i
                    class="ti-heart"
                    aria-hidden="true"
                  /> by
                  <a
                    href="https://colorlib.com"
                    target="_blank"
                  >Colorlib</a>
                  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<template>
  <footer>
    <div class="container-lg">
      <div class="row align-items-start justify-content-between">
        <div class="col-lg-5 col-12">
          <div class="row align-items-center justify-content-between">
            <div class="col-12">
              <div class="brand-name">Ecolabz</div>
            </div>
            <div class="col-12 about my-3">
              Your trusted partner in building sustainable products for the
              future. Be it blockchain development, AI, web apps, UI/UX design
              or SaaS. We are on a mission to give your startup a headstart.
            </div>
            <div class="col-12 mt-2 mb-5">
              <NuxtLink
                class="me-4"
                to="https://instagram.com/ecolabz"
                target="_blank"
                rel="noopener"
              >
                <img src="@/assets/icons/instagram.svg" alt="Instagram" />
              </NuxtLink>
              <NuxtLink to="https://twitter.com/ecolabz" target="_blank">
                <img src="@/assets/icons/twitter.svg" alt="Twitter" />
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-12">
          <div
            class="
              row
              align-items-start
              justify-content-between justify-content-sm-center
            "
          >
            <div class="col-lg-4 col-sm-4 col-6 my-3 footer-anchor-link">
              <h5>Explore</h5>
              <a href="https://ecolabz-dev.netlify.app/#services">What we do</a>

              <a href="mailto:contact@ecolabz.io">Careers</a>
            </div>
            <div class="col-lg-4 col-sm-4 col-6 my-3 footer-anchor-link">
              <h5>About</h5>
              <a href="https://ecolabz-dev.netlify.app/#about-us">About Us</a>

              <NuxtLink class="" to="/contact">Get A Quote</NuxtLink>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    <div class="all-rights-reserved">
      <p>
        &copy; {{ footerDate }} <span><span>eco</span>labz</span>. All Rights
        Reserved
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  setup() {
    const footerDate = new Date().getFullYear();
    return { footerDate };
  },
};
</script>

<style>
</style>
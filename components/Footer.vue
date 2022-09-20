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
              <a @click="gotoServices" class="link">What we do</a>

              <NuxtLink
                to="https://jobs.ecolabz.io"
                target="_blank"
                rel="noopener"
                class="link"
                >Careers</NuxtLink
              >
            </div>
            <div class="col-lg-4 col-sm-4 col-6 my-3 footer-anchor-link">
              <h5>About</h5>
              <a @click="gotoAboutUs" class="link">About Us</a>

              <NuxtLink class="link" to="/contact">Get A Quote</NuxtLink>
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

<script setup>
const footerDate = new Date().getFullYear();

const router = useRouter();

const goToAbout = () => {
  setTimeout(() => {
    const activeSect = document.getElementById("about-us");
    activeSect.scrollIntoView({
      behavior: "smooth",
    });
  }, 100);
};

const gotoAboutUs = () => {
  router.push("/");
  goToAbout();
};

const goToServices = () => {
  setTimeout(() => {
    const activeSect = document.getElementById("services");
    activeSect.scrollIntoView({
      behavior: "smooth",
    });
  }, 100);
};

const gotoServices = () => {
  router.push("/");
  goToServices();
};
</script>

<style>
</style>
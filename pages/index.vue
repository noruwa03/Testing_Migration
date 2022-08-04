<template>
  <div>
    <Head>
      <Title>Ecolabz</Title>
      <Meta name="description" content="Ecolabz site" />
    </Head>
    <NavigationBar />
    <!-- Header -->
    <header>
      <div class="container">
        <div class="text-center">
          <h1>
            Building The Next
            <span>Unicorn</span>
            With You
          </h1>

          <p>
            Your trusted partner in building sustainable products for the
            future. Be it blockchain development, AI, web apps, UI/UX design or
            SaaS. We are on a mission to give your startup a headstart.
          </p>

          <div class="mt-5">
            <NuxtLink class="anchor-link" to="/contact"
              >Get a free quote</NuxtLink
            >
          </div>
        </div>
      </div>
    </header>
    <!-- End of Header -->

    <!-- Services -->
    <div id="services" class="services">
      <div class="text-center mb-5">
        <h2>Our Services</h2>
      </div>
      <div class="container-lg">
        <div
          class="
            row
            align-items-center
            justify-content-between justify-content-sm-around
          "
        >
          <div class="col-lg-4 col-sm-6 col-12">
            <div class="service-card my-2">
              <div class="text-center">
                <img src="@/assets/icons/web-app.svg" alt="Web Application" />
                <h3>Web Application</h3>
                <p class="pb-5">
                  Our dedicated development team builds world class products and
                  can improve existing tecnologies.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-12">
            <div class="service-card my-2">
              <div class="text-center">
                <img
                  src="@/assets/icons/saas-app-dev.svg"
                  alt="SaaS App Development"
                />
                <h3>SaaS App Development</h3>
                <p>
                  we create custom SaaS solutions that are market ready,
                  comprehensive, and customer friendly for increased business
                  productivity.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-12">
            <div class="service-card my-2">
              <div class="text-center">
                <img
                  src="@/assets/icons/mobile-app-dev.svg"
                  alt="Mobile App Development"
                />
                <h3 class="pt-2">Mobile App Development</h3>
                <p class="pb-5">
                  We build mobile apps that delight users, run smoothly, and
                  loads faster for both Android and iOS.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-12">
            <div class="service-card my-2">
              <div class="text-center">
                <img
                  src="@/assets/icons/block-dev.svg"
                  alt="Blockchain Development"
                />
                <h3>Blockchain Development</h3>
                <p class="pb-4">
                  Blockchain is the future and our team has the reputation of
                  validating your ideas and building you great products
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6 col-12">
            <div class="service-card my-2">
              <div class="text-center">
                <img src="@/assets/icons/ux-ui-design.svg" alt="UX/UI Design" />
                <h3>UX/UI Design</h3>
                <p class="pb-4">
                  Our designers bring world class expertise to the table. Making
                  a bold statement from ideation to finished designs.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-12">
            <div class="service-card my-2">
              <div class="text-center">
                <img
                  src="@/assets/icons/data-science.svg"
                  alt="Data Science & AI Models"
                />
                <h3>Data Science & AI Models</h3>
                <p class="pb-4">
                  Our AI powered systems offers instant analysis of hundreds of
                  data, making meaning of them and helping you draw valuable
                  deductions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End of Services -->

    <!-- About Us -->
    <div id="about-us" class="about-us">
      <div class="text-center mb-4">
        <h2>What Makes Ecolabz Different</h2>
        <p class="about-us-desc">
          We are made up of highly trained experts using cutting edge technology
          to validate your ideas, build disruptive products, that achieves your
          business goals.
        </p>
      </div>
      <div class="container-lg">
        <div
          class="
            row
            align-items-center
            justify-content-between justify-content-sm-around
          "
        >
          <div class="col-lg-4 col-sm-6 col-12">
            <div class="about-card my-2">
              <div class="text-center">
                <img
                  src="@/assets/icons/cutting-edge-tech.svg"
                  alt="Cutting Edge Technology"
                />
                <h3>Cutting Edge Technology</h3>
                <p class="pb-5">
                  We utilize cutting edge solutions in our web design software
                  product design.
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6 col-12">
            <div class="about-card my-2">
              <div class="text-center">
                <img
                  src="@/assets/icons/cross-device-comp.svg"
                  alt="Cross Device Compatibility"
                />
                <h3>Cross Device Compatibility</h3>
                <p class="pb-3">
                  We implement projects end-to-end or augment your existing team
                  to complete any work that may be needed.
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6 col-12">
            <div class="about-card my-2">
              <div class="text-center">
                <img
                  src="@/assets/icons/tailor-made-dev.svg"
                  alt="Tailor Made Development"
                />
                <h3>Tailor Made Development</h3>
                <p class="pb-1">
                  We develop products from the idea stage using scalable and
                  dynamic systems to meet up to ever changing trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- End of About Us -->

    <!-- Latest News -->
    <!-- <div class="latest-news">
      <h1 class="text-center">Latest news from us</h1>

      <p class="text-center">
        Stay up to date with happenings in the tech world
      </p>

      <div class="container-lg">
        <div class="row align-items-center justify-content-between">
          <div class="col-12 mt-sm-5 mt-3">
            <img
              src="@/assets/icons/cover-image.jpg"
              class="img-fluid"
              alt="Cover Image"
            />
          </div>
        </div>
      </div>
    </div> -->
    <!-- End of Latest News -->

    <!-- Our Approach -->
    <div id="our-approach" class="our-approach">
      <div class="heading text-center mb-4">
        <h4>We follow a methodical approach to build innovative solutions</h4>
      </div>
      <div class="container-lg">
        <div
          class="
            row
            align-items-center
            justify-content-lg-between justify-content-sm-around
          "
        >
          <div class="col-lg-4 col-sm-6 col-12">
            <div class="approach-card my-2">
              <div class="text-center">
                <img
                  src="@/assets/icons/discovery_planning.svg"
                  alt="Discovery And Planning"
                />
                <h5>Discovery And Planning</h5>
                <p>
                  Our approach to design and product development starts with
                  validationg the idea, getting information on the desired
                  specifications product, enhancing our understanding of what
                  the client's wants so we can make user-led product decisions
                  and address customer needs.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-12">
            <div class="approach-card my-2">
              <div class="text-center">
                <img
                  src="@/assets/icons/design_development.svg"
                  alt="Design And Development"
                />
                <h5>Design And Development</h5>
                <p>
                  Our design team will work alongside our product engineering
                  team or become part of your team to develop beautiful concepts
                  that will be tailored to your requirements.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-12">
            <div class="approach-card my-2">
              <div class="text-center">
                <img
                  src="@/assets/icons/testing.svg"
                  alt="Testing And Launch Support"
                />
                <h5>Testing And Launch Support</h5>
                <p>
                  We deploy and provide high-informing testing solutions for
                  various research needs that will help our clients understand
                  consumer needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End of Our Approach -->

    <!-- Our Team -->
    <div class="our-team">
      <div class="heading text-center mb-4">
        <h2>Our Team</h2>
        <p>
          We have got a group of talented and committed individuals with the
          desire to exceed what we promised in time with needed quality and
          budget. Whether we work directly on your product or as an Extended
          Team, we adopt proven methodologies, business domain experience and
          technology expertise in our implementation.
        </p>
      </div>
    </div>
    <!-- End of Our Our Team -->

    <Footer />
  </div>
</template>

<script setup>
</script>

<style>
</style>
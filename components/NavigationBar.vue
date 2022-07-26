<template>
  <div>
    <!-- Mobile box-shadow style -->
    <div class="menu-card"></div>
    <NuxtLink class="logo-image" to="/">
      <img src="@/assets/icons/logo.svg" alt="logo"
    /></NuxtLink>
    <div id="menu-btn" @click="menuHandler">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- Navigation -->
    <nav>
      <div class="nav-item-container">
        <!-- Logo -->

        <NuxtLink class="navbar-brand logo-image" to="/"
          ><img src="@/assets/icons/logo.svg" alt="logo"
        /></NuxtLink>
        <!-- End of Logo -->

        <ul class="nav-item-list">
          <li @click="removeSidebar" class="nav-item">
            <a class="nav-link" href="https://ecolabz-dev.netlify.app/#about-us"
              >About</a
            >
          </li>

          <li @click="removeSidebar" class="nav-item">
            <a class="nav-link" href="https://ecolabz-dev.netlify.app/#services"
              >Services</a
            >
          </li>
          <li @click="comingSoon" class="nav-item">
            <NuxtLink class="nav-link" to="">Portfolio</NuxtLink>
          </li>
          <li @click="comingSoon" class="nav-item">
            <NuxtLink class="nav-link" to="">Jobs</NuxtLink>
          </li>
          <li @click="removeSidebar" class="nav-item">
            <NuxtLink class="nav-link" to="/contact">Contact</NuxtLink>
          </li>
        </ul>

        <div class="get-free-quote">
          <NuxtLink class="anchor-link" to="/contact"
            >Get a free quote</NuxtLink
          >
        </div>
      </div>
    </nav>

    <!-- End of Navigation -->
  </div>
</template>


<script setup>
import Swal from "sweetalert2";

const menuHandler = () => {
  const navIcon2 = document.querySelector("#menu-btn");
  const nav = document.querySelector("nav");
  const navItem = document.querySelector(".nav-item-list");

  nav.classList.toggle("active");
  navItem.classList.toggle("active");
  navIcon2.classList.toggle("open");
};

const comingSoon = () => {
  Swal.fire({
    title: "Page is coming soon",
    confirmButtonColor: "#3085d6",
  });
};

const removeSidebar = () => {
  const navIcon2 = document.querySelector("#menu-btn");
  const nav = document.querySelector("nav");
  const navItem = document.querySelector(".nav-item-list");

  nav.classList.toggle("active");
  navItem.classList.toggle("active");
  navIcon2.classList.toggle("open");
};
</script>

<style>

</style>


   
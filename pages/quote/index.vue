<template>
  <div>
    <Head>
      <Title>Ecolabz</Title>
      <Meta name="description" content="Ecolabz site" />
    </Head>

    <section class="card-table">
      <!-- start of container-lg -->
      <div class="custom-container pt-1 pb-3">
        <div class="row align-items-center justify-content-sm-between pt-4">
          <div class="col-sm-8 col-12">
            <div class="h2">Admin Dashboard</div>
            <p class="fw-normal">
              Quotes from potenial clients. Please delete items after you have
              contacted the client to free up space
            </p>
          </div>
          <div class="col-sm-4 col-12 text-end">
            <div class="btn btn-outline-danger" @click="logout">Logout</div>
          </div>
        </div>
      </div>
      <!-- end of row -->

      <div class="header-container">
        <div class="text-lead">Qoute Service</div>
        <div class="row">
          <div class="col-1">
            <div class="header">Company</div>
          </div>
          <div class="col-2">
            <div class="header">Name</div>
          </div>
          <div class="col-3">
            <div class="header">Email</div>
          </div>
          <div class="col-4">
            <div class="header">Service</div>
          </div>
          <div class="col-5">
            <div class="header">Budget</div>
          </div>
        </div>
      </div>
      <div v-if="computeQuote.loadingQuotes">
        <div class="text-center mt-5">
          <section class="loading">
            <div class="loader">
              <!-- <span style="--i: 1"></span>
            <span style="--i: 2"></span>
            <span style="--i: 3"></span>
            <span style="--i: 4"></span>
            <span style="--i: 5"></span> -->
              <span style="--i: 6"></span>
              <span style="--i: 7"></span>
              <span style="--i: 8"></span>
              <span style="--i: 9"></span>
              <span style="--i: 10"></span>
              <span style="--i: 11"></span>
              <span style="--i: 12"></span>
              <span style="--i: 13"></span>
              <span style="--i: 14"></span>
              <span style="--i: 15"></span>
              <span style="--i: 16"></span>
              <span style="--i: 17"></span>
              <span style="--i: 18"></span>
              <span style="--i: 19"></span>
              <span style="--i: 20"></span>
            </div>
          </section>
        </div>
      </div>
      <div v-else>
        <div v-for="q in computeQuote.quotes" :key="q.id" class="sub-container">
          <NuxtLink :to="{ name: 'quote-slug', params: { slug: q.id } }">
            <div class="row">
              <div class="col-1">
                <div class="sub-text">
                  {{ q.company_name.length == "" ? "N/A" : q.company_name }}
                </div>
              </div>
              <div class="col-2">
                <div class="sub-text">
                  {{ q.name.length == "" ? "N/A" : q.name }}
                </div>
              </div>
              <div class="col-3">
                <div class="sub-text">
                  {{ q.email.length == "" ? "N/A" : q.email }}
                </div>
              </div>
              <div class="col-4">
                <div class="sub-text loop-items">
                  <div v-for="s in q.services" :key="s.id" class="items">
                    {{ s }}
                  </div>
                </div>
              </div>
              <div class="col-5">
                <div class="sub-text loop-items">
                  <div class="budget">
                    {{ q.budget.length == "" ? "N/A" : q.budget }}
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
          <!-- <a :href="`/quote/${q.id}`" class="category-style">
            <div class="row">
              <div class="col-1">
                <div class="sub-text">{{ q.company_name }}</div>
              </div>
              <div class="col-2">
                <div class="sub-text">{{ q.name }}</div>
              </div>
              <div class="col-3">
                <div class="sub-text">{{ q.email }}</div>
              </div>
              <div class="col-4">
                <div class="sub-text loop-items">
                  <div v-for="s in q.services" :key="s.id" class="items">
                    {{ s }}
                  </div>
                </div>
              </div>
              <div class="col-5">
                <div class="sub-text loop-items">
                  <div v-for="b in q.budget" :key="b.id" class="budget">
                    {{ b }}
                  </div>
                </div>
              </div>
            </div>
          </a> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { getQuotes } from "~/store";

definePageMeta({
  middleware: [
    async function () {
      const authenticateUser = getQuotes();
      if (!authenticateUser.user) {
        return navigateTo("/login");
      }
    },
  ],
});

const computeQuote = getQuotes();
computeQuote.GET_QUOTES();

const logout = () => {
  computeQuote.LOGOUT();
};
</script>

<style>
</style>
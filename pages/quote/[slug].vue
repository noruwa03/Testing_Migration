<template>
  <div>
    <Head>
      <Title>Ecolabz</Title>
      <Meta name="description" content="Ecolabz site" />
    </Head>

    <div class="detail-page">
      <div v-if="computeQuote.loadingSingleQuote">
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
        <div class="text-center my-3">
          <NuxtLink class="btn btn-outline-info" to="/quote">Quotes</NuxtLink>
        </div>
        <div class="detail-card">
          <div class="row-item">
            <h2>Name:</h2>
            <div class="value">
              {{
                computeQuote.singleQuote.name.length == ""
                  ? "N/A"
                  : computeQuote.singleQuote.name
              }}
            </div>
          </div>
          <div class="divider"></div>
          <div class="row-item">
            <h2>Email:</h2>
            <div class="value">
              {{
                computeQuote.singleQuote.email.length == ""
                  ? "N/A"
                  : computeQuote.singleQuote.email
              }}
            </div>
          </div>

          <div class="divider"></div>
          <div class="row-item">
            <h2>Phone No:</h2>
            <div class="value">
              {{
                computeQuote.singleQuote.phone_no.length == ""
                  ? "N/A"
                  : computeQuote.singleQuote.phone_no
              }}
            </div>
          </div>

          <div class="divider"></div>
          <div class="row-item">
            <h2>Company:</h2>
            <div class="value">
              {{
                computeQuote.singleQuote.company_name.length == ""
                  ? "N/A"
                  : computeQuote.singleQuote.company_name
              }}
            </div>
          </div>

          <div class="divider"></div>
          <div class="row-item">
            <h2>Message:</h2>
            <div class="value">
              {{
                computeQuote.singleQuote.message.length == ""
                  ? "N/A"
                  : computeQuote.singleQuote.message
              }}
            </div>
          </div>

          <div class="divider"></div>
          <div class="row-item">
            <h2>Services:</h2>
            <div class="value">
              <div
                v-for="services in computeQuote.singleQuote.services"
                :key="services"
                class="items"
              >
                {{ services }}
              </div>
            </div>
          </div>

          <div class="divider"></div>
          <div class="row-item">
            <h2>Budget:</h2>
            <div class="value">
              <div class="budget">
                {{
                  computeQuote.singleQuote.budget.length == ""
                    ? "N/A"
                    : computeQuote.singleQuote.budget
                }}
              </div>
            </div>
          </div>
          <div class="divider"></div>

          <button @click="del">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { getQuotes } from "~/store";
import Swal from "sweetalert2";

const computeQuote = getQuotes();

const route = useRoute();

const slug = route.params.slug;

computeQuote.GET_SINGLE_QUOTE(slug);

const del = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
      computeQuote.DELETE_QUOTE(slug);
    }
  });
};
</script>


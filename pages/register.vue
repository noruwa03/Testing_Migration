<template>
  <div>
    <Head>
      <Title>Ecolabz</Title>
      <Meta name="description" content="Ecolabz site" />
    </Head>
    <div class="container-lg mt-5">
      <!-- Form -->
      <div class="">
        <div class="row align-items-center justify-content-around">
          <div class="col-12 col-lg-6 col-sm-6">
            <div class="text-center h2 pb-3">Register</div>
            <form @submit.prevent="submitForm">
              <!-- <label for="display_name">Display Name</label>

              <div class="form-group">
                <input
                  type="text"
                  class="form-control-input mt-2"
                  placeholder="Display Name"
                  required
                 v-model="_display_name"
                />
              </div> -->
              <label for="email">Email</label>

              <div class="form-group">
                <input
                  type="email"
                  class="form-control-input mt-2"
                  placeholder="Email"
                  required
                  v-model="_email"
                />
              </div>

              <label for="from">Password</label>

              <div class="form-group">
                <input
                  type="password"
                  class="form-control-input mt-2"
                  placeholder="password"
                  required
                  v-model="_password"
                />
              </div>

              <div class="form-group text-center">
                <button type="submit" class="form-control-submit-button">
                  Register
                </button>
              </div>
            </form>
            <!-- end of form -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getQuotes } from "~/store";

const authenticateUser = getQuotes();

const _email = ref("");
const _password = ref("");

const submitForm = () => {
  let data = {
    email: _email.value,
    password: _password.value,
    // displayName: _display_name.value
  };

  authenticateUser.REGISTER(data);
};
</script>
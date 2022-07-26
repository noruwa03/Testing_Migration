<template>
  <div>
    <Head>
      <Title>Ecolabz</Title>
      <Meta name="description" content="Ecolabz site" />
    </Head>
    <NavigationBar/>
    <div class="container-lg ">
      <!-- Form -->
      <div class="login-page">
        <div v-if="authenticateUser.loginError">
        <div class="text-center h3 text-danger">
          Unauthorized user
        </div></div>
        <div v-else class="row align-items-center justify-content-around">
          <div class="col-12 col-lg-6 col-sm-6">
            <div class="text-center h3">Welcome Back!</div>
            <div class="text-center h4 pb-4">Login in by entering the information below</div>
            <form @submit.prevent="submitForm">
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
                  login
                </button>
              </div>
            </form>
            <!-- end of form -->
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script setup>
import { getQuotes } from '~/store'


const authenticateUser = getQuotes();

const _email = ref("");
const _password = ref("");



const submitForm = () => {
  let data = {
    email: _email.value,
    password: _password.value
}

    authenticateUser.LOGIN(data);
}


</script>
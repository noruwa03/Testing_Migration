import environmentConfig from "~~/composables";

import { defineStore } from "pinia";
import Swal from "sweetalert2";
import {
  serverTimestamp,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

export const getQuotes = defineStore("quotes", {
  state: () => ({
    loadingQuotes: true,
    quotes: [],
    loadingSingleQuote: true,
    singleQuote: {},
    loginError: false,
    user: "",
  }),

  actions: {
    async REGISTER(payload) {
      environmentConfig().register(payload);
    },

    async LOGIN(payload) {
      environmentConfig().login(payload);
    },

    async LOGOUT() {
      environmentConfig().logout();
    },
    async GET_QUOTES() {
      // Get Collection Data
      // onSnapshot(colRef, (snapshot) => {
      //   snapshot.docs.forEach((doc) => {
      //     this.quotes.push({ ...doc.data(), id: doc.id });
      //     this.loadingQuotes = false;
      //   });
      // });
      getDocs(environmentConfig().q)
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            this.quotes.push({ ...doc.data(), id: doc.id });
            this.loadingQuotes = false;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async GET_SINGLE_QUOTE(id) {
      const docRef = doc(
        environmentConfig().db,
        environmentConfig().configApi.collection,
        id
      );

      getDoc(docRef).then((doc) => {
        this.singleQuote = doc.data();
        this.loadingSingleQuote = false;
        this.quotes = [];
        this.loadingQuotes = true;
      });
    },

    async CREATE_QUOTE(payload) {
      // Get Collection Data
      addDoc(environmentConfig().colRef, {
        name: payload.name,
        email: payload.email,
        phone_no: payload.phone_no,
        company_name: payload.company_name,
        message: payload.message,
        services: payload.services,
        budget: payload.budget,
        createdAt: serverTimestamp(),
      }).then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your quote has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.href = "/";
      });
    },

    async DELETE_QUOTE(id) {
      // Delete Collection Data
      const docRef = doc(
        environmentConfig().db,
        environmentConfig().configApi.collection,
        id
      );

      const router = useRouter();
      deleteDoc(docRef).then(() => {
        router.push({ path: "/quote" });
      });
    },
  },
});

import { initializeApp } from "firebase/app";

import { getQuotes } from "~~/store";

import { getFirestore, collection, query, orderBy } from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Swal from "sweetalert2";

export default function environmentConfig() {
  const configApi = useRuntimeConfig();

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: `${configApi.apiKey}`,
    authDomain: `${configApi.authDomain}`,
    projectId: `${configApi.projectId}`,
    storageBucket: `${configApi.storageBucket}`,
    messagingSenderId: `${configApi.messagingSenderId}`,
    appId: `${configApi.apiId}`,
  };

  const router = useRouter();

  const userData = getQuotes();

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Services
  const db = getFirestore(app);

  // Collection Reference
  const colRef = collection(db, `${configApi.collection}`);

  const q = query(colRef, orderBy("createdAt", "desc"));

  const register = (payload) => {
    createUserWithEmailAndPassword(getAuth(), payload.email, payload.password)
      .then((cred) => {
        userData.user = cred.user.email;
        router.push({ path: "/quote" });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const login = (payload) => {
    signInWithEmailAndPassword(getAuth(), payload.email, payload.password)
      .then((cred) => {
        userData.user = cred.user.email;
        router.push({ path: "/quote" });
      })
      .catch((err) => {
        userData.loginError = true;
        console.log(err.message);
      });
  };

  const logout = () => {
    signOut(getAuth())
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully signed out",
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return {
    configApi,
    db,
    colRef,
    q,
    register,
    login,
    logout,
  };
}

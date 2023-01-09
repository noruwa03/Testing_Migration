import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";

import "./App.css";
import Default from "./layouts/Default";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Services from "./pages/Services";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import Quote from "./pages/quote/Quote";
import QuoteDetail, { fetchSingleQuote } from "./pages/quote/[slug]";

import { initializeApp } from "firebase/app";

import { getFirestore, collection, query, orderBy } from "firebase/firestore";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Team from "./pages/Team";
import Error from "./components/Error";


// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signOut,
//   signInWithEmailAndPassword,
// } from "firebase/auth";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Services
export const db = getFirestore(app);

// Collection Reference
export const colRef = collection(db, `${process.env.REACT_APP_COLLECTION}`);


export const q = query(colRef, orderBy("createdAt", "desc"));

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route element={<Default />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/quote" element={<Quote />} />
        <Route
          path="/quote/:slug"
          loader={fetchSingleQuote}
          element={<QuoteDetail />}
          errorElement={<Error />}
        />
        <Route path="/login" element={<Login />}  />
        <Route path="/register" element={<Register />} />
      </Route>,
    ])
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

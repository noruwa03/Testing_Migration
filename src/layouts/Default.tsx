import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import TheNavBar from "../components/TheNavBar";

const Default = () => {
  return (
    <div>
      <TheNavBar />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Default;

import Banner from "../components/shared/Banner";
import Navbar from "../components/shared/Navbar";
import Section from "../components/shared/Section";
import Footer from "../components/shared/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
      <div>
        <Navbar />
        <Banner />
        <Section />
        <Outlet />
        <Footer />
      </div>
    );
  }

  export default Home;
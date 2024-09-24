import Banner from "../components/shared/Banner";
import Navbar from "../components/shared/Navbar";
import Section from "../components/shared/Section";
import Container from "../components/shared/Container";

export default function Homepage() {
    return (
      <div>
        <Navbar />
        <Banner />
        <Section />
        <Container />
      </div>
    );
  }
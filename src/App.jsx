import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Container from "./components/Container";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import SEO from "./components/SEO";

function App() {
  return (
    <>
      <div className="overflow-x-hidden mx-auto bg-primary-gray max-w-[1440px]">
        <Container>
          <Navigation />
          <Home />
          <Gallery />
        </Container>
        <SEO />
        <Footer />
      </div>
    </>
  );
}

export default App;

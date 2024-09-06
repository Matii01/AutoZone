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
      <Container>
        <Navigation />
        <Home />
        <Gallery />
      </Container>
      <SEO />
      <Footer />
    </>
  );
}

export default App;

import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Started from "./components/Started";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <main className="wrapper">
      <Header />
      <Hero />
      <Features />
      <Testimonial />
      <Started />
      <Footer />
    </main>
  );
}

export default App;

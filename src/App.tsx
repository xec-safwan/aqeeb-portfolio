import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { Gallery } from "./sections/Gallery";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-stone-200">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Gallery />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

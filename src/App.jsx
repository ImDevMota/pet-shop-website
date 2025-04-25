import Header from "./components/Header";
import Outdoor from "./components/Outdoor";
import Products from "./components/Products";
import Info from "./components/Info";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <Outdoor />

      <Products />

      <div className="bg-gradient-to-b from-[#4A90E2] to-[#F7D154]">
        <Info />

        <Contact />

        <Navigation />
      </div>

      <Footer />
    </>
  );
}

export default App;

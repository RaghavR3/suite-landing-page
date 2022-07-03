import "./index.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Featured from "./components/featured";
import Testimony from "./components/testimony";
import Footer from "./components/footer";

function App() {
  return (
    <div className="py-6 md:py-10 lg:py-16 bg-sand">
      <Header />
      <Hero />
      <Featured />
      <Testimony />
      <Footer />
    </div>
  );
}

export default App;

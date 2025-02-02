import "./App.css";
import Advertise from "./Components/Advertise";
import Community from "./Components/Community";
import Footer from "./Components/Footer";
import Footer2 from "./Components/Footer2";
import LatestNews from "./Components/LatestNews";
import NavBar from "./Components/NavBar";
import Partners from "./Components/Partners";
import Testimonials from "./Components/Testimonials";
import TopBar from "./Components/TopBar";

function App() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <TopBar />

      <NavBar />
      <Community />
      <div className="mx-[10%]">
        <Partners />
      </div>
      <Testimonials />
      <LatestNews/>
      <Advertise />
      <Footer2 />
      <Footer />
    </div>
  );
}

export default App;

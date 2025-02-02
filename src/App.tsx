import "./App.css";
import Advertise from "./Components/Advertise";
import Footer from "./Components/Footer";
import Footer2 from "./Components/Footer2";
import NavBar from "./Components/NavBar";
import TopBar from "./Components/TopBar";

function App() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <TopBar />

      <NavBar />
      <Advertise/>
      <Footer2 />
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import TopBar from "./Components/TopBar";

function App() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <TopBar/>

      <NavBar />

      <Footer/>
      
    </div>
  );
}

export default App;

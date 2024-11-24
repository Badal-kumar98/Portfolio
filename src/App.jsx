import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <Footer />
      </div>
      <ToastContainer className={"toast-container"} />
    </>
  );
}

export default App;

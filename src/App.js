import { Routes, Route } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    < >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/' element={<Contact />}></Route>

      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;

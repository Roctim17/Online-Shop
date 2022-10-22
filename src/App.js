import { Routes, Route } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reset from "./pages/Reset";

import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    < >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        {/* <Route path='/home' element={<Home />}></Route> */}
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/reset' element={<Reset />}></Route>
      
        <Route path="*" element={<NotFound />} />


      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;

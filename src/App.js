import { Routes ,Route} from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    < >
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/' element={<Contact/>}></Route>

      </Routes>
     <Footer></Footer>
    </>
  );
}

export default App;

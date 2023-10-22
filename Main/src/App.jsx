
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";


const App = () => {

  return (
    <>
      <div>
        <Nav/>
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App;

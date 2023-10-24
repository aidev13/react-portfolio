
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";


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

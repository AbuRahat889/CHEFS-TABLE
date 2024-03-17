
import "./App.css";
import Navbar from "./Components/Header/Navbar";
import Bannar from "./Components/Bannar/Bannar";
import Recipes from "./Components/Recipes/Recipes";
import Footer from "./Components/Footer/Footer";
// import PropTypes from 'prop-types';

function App() {
  

  return (
    <>
    <hr />
      <Navbar></Navbar>
      <hr />
      <Bannar></Bannar>
      <Recipes></Recipes>
      <Footer></Footer>
    </>
  );
}

export default App;

import RoutesWebsite from "./Components/RoutesWebsite/RoutesWebsite";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AppContext from "./Components/Context/AppContext";
import "./App.css";


function App() {
  const headerContext = <h1>header</h1>;
  const footerContext = <p>footer</p>
  return (
    <>
      <AppContext.Provider value={{ headerContext, footerContext }}>
        <div>
          <Navbar />
          <RoutesWebsite />
          <Footer />
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;

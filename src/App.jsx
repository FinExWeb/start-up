import React from "react";
// import navbar component
import Navbar from "./components/Navbar/Navbar";
import "./app.css";
import Footer from "./components/Footer/Footer";
import Router from "./Routes/Router";
// import navbar component

function App() {
  return (
    <>
      <div className="container">
        <div className="navar--top">
          <Navbar />
        </div>
        <Router />
        <hr className="my-5" />
      </div>
      <div className="footers">
        <Footer />
      </div>
    </>
  );
}

export default App;

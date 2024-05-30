import "./App.css";

import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import ProductSection from "./components/ProductSection";
import FAQ from "./components/FAQ";

function Button(props) {
  return <button className={props.buttonStyle}>{props.buttonText}</button>;
}

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;

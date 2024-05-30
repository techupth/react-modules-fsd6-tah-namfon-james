import "./App.css";
// import * as Section from "./components/section";
import {
  Header,
  MainContent,
  ProductSection,
  FAQ,
  Footer,
} from "./components/section";

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

// Style
import "./App.css";
// Layout
import Header from "./components/Header";
import Footer from "./components/Footer";
// Components
import Installation from "./components/Installation";
import Example from "./components/Example";
import SectionOne from "./components/SectionOne";

import Api from "./components/Api";
function App() {
  return (
    <div className="w-screen min-h-screen">
      <Header />
      <main className="container mx-auto px-4 md:px-0 flex flex-col space-y-10 md:space-y-7">
        <SectionOne />
        <Installation />
        <Example />
        <Api />
      </main>
      <Footer />
    </div>
  );
}

export default App;

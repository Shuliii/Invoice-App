import {useEffect} from "react";
import "./App.css";
import Header from "./components/Header";

import InvoicePage from "./components/InvoicePage";

function App() {
  useEffect(() => {
    document.documentElement.classList.remove("theme--boot");
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <InvoicePage />
      </main>
    </div>
  );
}

export default App;

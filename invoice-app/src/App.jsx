import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import InvoiceToolBar from "./components/InvoiceToolBar";

function App() {
  useEffect(() => {
    document.documentElement.classList.remove("theme--boot");
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <InvoiceToolBar />
      </main>
    </div>
  );
}

export default App;

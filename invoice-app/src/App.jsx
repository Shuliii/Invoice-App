import {useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

import InvoicePage from "./components/Pages/InvoicePage";

import InvoiceDetailPage from "./components/Pages/InvoiceDetailPage";

function App() {
  useEffect(() => {
    document.documentElement.classList.remove("theme--boot");
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<InvoicePage />} />
          <Route path="/invoice/:id" element={<InvoiceDetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

import {useEffect} from "react";
import {Routes, Route, useLocation} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

import InvoicePage from "./components/Pages/InvoicePage";
import InvoiceDetailPage from "./components/Pages/InvoiceDetailPage";
import InvoiceEditPage from "./components/Pages/InvoiceEditPage";
import InvoiceNewPage from "./components/Pages/InvoiceNewPage";

function App() {
  const location = useLocation();
  const state = location.state && location.state.backgroundLocation;
  useEffect(() => {
    document.documentElement.classList.remove("theme--boot");
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Routes location={state || location}>
          <Route path="/" element={<InvoicePage />} />
          <Route path="/invoice/new" element={<InvoiceNewPage />} />
          <Route path="/invoice/:id" element={<InvoiceDetailPage />} />
          <Route path="/invoice/:id/edit" element={<InvoiceEditPage />} />
        </Routes>

        {state && (
          <Routes>
            <Route path="/invoice/new" element={<InvoiceNewPage />} />
            <Route path="/invoice/:id/edit" element={<InvoiceEditPage />} />
          </Routes>
        )}
      </main>
    </div>
  );
}

export default App;

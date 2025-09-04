import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  useEffect(() => {
    document.documentElement.classList.remove("theme--boot");
  }, []);

  return (
    <>
      <Header />
    </>
  );
}

export default App;

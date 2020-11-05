import React from "react";
import "./App.css";
import PaymentForm from "./components/PaymentForm";
import { ContextProvider } from "./Globalcontext";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <PaymentForm />
      </div>
    </ContextProvider>
  );
}

export default App;

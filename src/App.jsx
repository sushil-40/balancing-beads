import { useState } from "react";

import "./App.css";
import { Hero } from "./components/Hero";
import { Display } from "./components/Display";

function App() {
  return (
    <div>
      <div className="wrapper">
        {/* hero section  */}
        <Hero />

        {/* Display Section  */}

        <Display />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../styles.css";
import resumeData from "./data/resume.json";
import { ThemeProvider } from "./theme/ThemeContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App data={resumeData} />
    </ThemeProvider>
  </React.StrictMode>
);

import { StrictMode } from "react";
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="app" element={<App />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

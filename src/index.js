import { StrictMode } from "react";
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App from "./App";
import Home from "./components/Home";
import Login from "./components/Login";
import CardBuilder from "./components/CardBuilder";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="card-builder" element={<CardBuilder />} />
          </Route>
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

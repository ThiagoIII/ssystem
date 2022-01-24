import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./App";
import ContextLogin from "./pages/contextAPI/ContextLogin";
import DragonBirth from "./pages/recoil/DragonBirth";
import DragonList from "./pages/recoil/DragonList";
import RecoilLogin from "./pages/recoil/RecoilLogin";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="context" element={<ContextLogin />} />
            <Route path="recoil" element={<RecoilLogin />}>
              <Route path="logged" element={<DragonList />} />
              <Route path="dragonBirth" element={<DragonBirth />} />
            </Route>
          </Routes>
        </Router>
      </React.Suspense>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

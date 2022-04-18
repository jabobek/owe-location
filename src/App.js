import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LocationList from "./containers/LocationList";
import Header from "./containers/Header";
import "./App.css";
import LocationDetailComponent from "./containers/LocationDetailComponent";
import LocationCreateComponent from "./containers/LocationCreateComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes >
          <Route path="/" element={<LocationList/>} exact />
          <Route path="/locations/:locationId" element={<LocationDetailComponent/>} />
          <Route path="/create" element={<LocationCreateComponent/>} />
          <Route>404</Route>
        </Routes >
      </Router>
    </div>
  );
}

export default App;

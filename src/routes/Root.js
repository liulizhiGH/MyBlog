import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import lazy from "@/config/lazy";

export default function Root(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={lazy("views/Home", props)} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </Router>
  );
}

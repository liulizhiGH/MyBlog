import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import lazy from "@/config/lazy";

export default function Root(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={lazy("views/Home", props)} />
        <Route path="/list" element={lazy("views/List", props)} />
        <Route path="/detail">
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>父级/invoices未匹配任何子路由时展示</p>
              </main>
            }
          />
          <Route path=":aid" element={lazy("views/Detail", props)} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>这里是404，没有任何路径匹配时展示，注意不要和index属性搞混</p>
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

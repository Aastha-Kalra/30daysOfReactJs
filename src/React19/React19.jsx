import React from "react";
import Compiler from "./Compiler";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Actions from "./Actions";
import Nav from "./Nav";

const React19 = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route element={<Compiler />} path="/" />
          <Route element={<Actions />} path="/actions" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default React19;

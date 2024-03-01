import React from "react";
import Compiler from "./Compiler";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const React19 = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Compiler />} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default React19;

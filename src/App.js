import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import PlayTrivia from "./components/PlayTrivia/PlayTrivia";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/playTrivia" element={<PlayTrivia />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

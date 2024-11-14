import React from "react";
import { Container } from "@mui/material";
import Navbar from "../src/components/Navbar/Navbar.tsx";
import SearchForm from "./components/SearchForm/SearchForm.tsx";
import { Routes, Route } from "react-router-dom";
import OneShow from "./components/OneShow/OneShow.tsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <SearchForm />
        <Routes>
          <Route path="/shows/:id" element={<OneShow />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;

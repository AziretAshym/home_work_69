import React from 'react';
import { Container } from '@mui/material';
import Navbar from '../src/components/Navbar/Navbar.tsx';
import SearchForm from './components/SearchForm/SearchForm.tsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <SearchForm />
      </Container>
    </>
  );
};

export default App;
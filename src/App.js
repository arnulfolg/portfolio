import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Home from './components/views/home/Home'

function App() {

  return (
    <section className="App">
        <Header></Header>
        <main className="main">
            <Home />
        </main>
    </section>
  );
}

export default App

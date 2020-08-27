import React from 'react';
import "./styles/SASS/style.css";
import Header from './Components/Header';
import Questions from './Components/Questions';
import Graph from './Components/Graph';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Questions />

        <Graph />
      </main>
    </div>
  );
}

export default App;

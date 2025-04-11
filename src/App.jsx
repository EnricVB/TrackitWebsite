import React from "react";
import 'styles/global.css';
import { Routes, Route, Link } from 'react-router-dom';

import Home from 'pages/Home';
import Download from 'pages/Download';
import Header from 'components/website/Header';

class App extends React.Component {
  render() {
    return (
      <div className="website" id="app">
        <Header/>

        {/* Navegación global */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<Download />} />
        </Routes>
      </div>
    );
  }
}

export default App;

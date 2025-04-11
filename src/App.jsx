import React from "react";
import 'styles/global.css';
import { Routes, Route, Link } from 'react-router-dom';

import Home from 'pages/Home';
import Download from 'pages/Download';
import CommandGuide from 'pages/CommandGuide';
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
          <Route path="/commandguide" element={<CommandGuide />} />
        </Routes>
      </div>
    );
  }
}

export default App;

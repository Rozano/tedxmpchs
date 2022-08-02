import './App.css';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Event2020 from './components/pages/events/Event2020';
import Event2022 from './components/pages/events/Event2022';
import Team2022 from './components/pages/team/Team2022';
import Team2020 from './components/pages/team/Team2020';
import Home from './components/pages/home/Home';
import Speakers2022 from './components/pages/speakers/Speakers2022';
import Speakers2020 from './components/pages/speakers/Speakers2020';
import MCPHSpeaks from './components/pages/mcphspeaks/MCPHSpeaks';

function App() {
  AOS.init();
  return (
    <div className="App">
      <React.StrictMode>
        <Router>
          <NavBar/>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/event2020" element={<Event2020 />} />
              <Route exact path="/event2022" element={<Event2022 />} />
              <Route exact path="/speakers2022" element={<Speakers2022 />} />
              <Route exact path="/speakers2020" element={<Speakers2020 />} />
              <Route exact path="/team2022" element={<Team2022 />} />
              <Route exact path="/team2020" element={<Team2020 />} />
              <Route exact path="/mcphspeaks" element={<MCPHSpeaks />} />
            </Routes>
            <Header/>
            <Footer/>
        </Router>
      </React.StrictMode>
    </div>
  );
}

export default App;

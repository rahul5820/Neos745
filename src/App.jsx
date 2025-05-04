// src/App.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Neos from './Components/Neos';
import About from './Components/About';
import PlanetsLab from './Components/PlanetsLab';
import NeosTable from './Components/NeosTable';
import PHAVisualization from './Components/PHAVisualization';
import PlotAsteroidOrbits from './Components/PlotAsteroidOrbits';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/neos" element={<Neos />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/planetslab" element={<PlanetsLab />} />
                    <Route path="/NeosTable" element={<NeosTable/>} />
                    <Route path="/PHAVisualization" element={<PHAVisualization/>} />
                    <Route path="/PlotAsteroidOrbits" element={<PlotAsteroidOrbits/>} />


                </Routes>
            </div>
        </Router>
    );
};

export default App;

import './App.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage/landingPage';
import CreateEvent from './CreateEvent/createEvent';
import Event from './Event/event';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="create" element={ <CreateEvent/> } />
        <Route path="event" element={ <Event/> } />
      </Routes>
    </div>
  );
}

export default App;

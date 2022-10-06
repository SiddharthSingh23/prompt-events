import './App.css';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Sidemenu } from './components/Sidemenu/Sidemenu';

import { AllEvents } from './components/AllEvents/AllEvents'
import { AddEvents } from './components/AddEvents/AddEvents'
import { TodaysEvents } from './components/CalendarEvents/TodaysEvents/TodaysEvents'
import { UpcomingEvents } from './components/CalendarEvents/UpcomingEvents/UpcomingEvents'
import { Settings } from './components/Settings/Settings'
import { Cards } from './components/Z/Cards';

function App() {

  const [inactive, setInactive] = useState(false);

  return (
    <Router>
      <div className="App">

        <Sidemenu onCollapse={(inactive) => { setInactive(inactive) }} />

        <div className={`container ${inactive ? "inactive" : ""}`}>
          <Routes>

            <Route path="/all-events" exact element={<AllEvents />} />
            <Route path="/add-events" exact element={<AddEvents />} />
            <Route path="/todays-events" exact element={<TodaysEvents />} />
            <Route path="/upcoming-events" exact element={<UpcomingEvents />} />
            <Route path="/settings" exact element={<Settings />} />
            <Route path="/" exact element={<Cards />} />
            {/* <Route path="/" exact element={<AllEvents />} /> */}

          </Routes>
        </div>

      </div>
    </Router>

  );
}

export default App; 
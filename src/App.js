import "./App.css";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Components/pages/ContactUs";
import { Services,ServicesOne,ServicesTwo,ServicesThree } from "./Components/pages/Services";
import { TimeTracker, } from "./Components/pages/TimeTracker";
import { EventsOne } from "./Components/pages/EventsOne";

import { AboutUs,OurAim,OurVision } from "./Components/pages/AboutUs";
import Support from "./Components/pages/Support";
import AddProject from "./Components/pages/AddProject";
import Navbar from "./Components/Navbar";
import Project from "./Components/pages/Project";


function App() {
return (
	<Router>
   
	<Sidebar />
	<Routes>
		<Route path='/about-us' element={<AboutUs/>} />
		<Route path='/about-us/aim' element={<OurAim/>} />
		<Route path='/about-us/vision' element={<OurVision/>} />
		<Route path='/services' element={<Services/>} />
		<Route path='/services/services1' element={<ServicesOne/>} />
		<Route path='/services/services2' element={<ServicesTwo/>} />
		<Route path='/services/services3' element={<ServicesThree/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/timetracker' element={<TimeTracker/>} />
		<Route path='/events/events1' element={<EventsOne/>} />
		<Route path='/project' element={<Project/>} />
		<Route path='/support' element={<Support/>} />
    <Route path='/addProject' element={<AddProject/>} />
	

	</Routes>
	</Router>
);
}

export default App;






















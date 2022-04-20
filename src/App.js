import React from "react";
//import Pages
import AboutUs from "./pages/AboutUs";
//import style
import GlobalStyle from "./components/GlobalStyle";

import Nav from "./components/Nav";
import ContactMe from "./pages/ContactMe";
import MyWork from './pages/MyWork';
import {Switch, Route,useLocation} from 'react-router-dom';
import ProjectDetail from "./pages/ProjectDetail";
//Animation 
import {AnimatePresence} from 'framer-motion';
function App() {

    const location =useLocation();

  return (
    <div className="App">
    <GlobalStyle/>
    <Nav/>
    <AnimatePresence exitBeforeEnter>
    <Switch location={location} key={location.pathname}>
    <Route path="/" exact >
      <AboutUs/>
    </Route>
    <Route path="/work" exact>
      <MyWork/>
    </Route>
    <Route path="/work/:id">
      <ProjectDetail/>
    </Route>
    <Route path="/contact">
    <ContactMe/>
    </Route>
    </Switch>
     </AnimatePresence>
    </div>
  );
}

export default App;

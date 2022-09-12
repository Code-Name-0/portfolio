
import { useEffect, useState } from 'react';
import {NavBar, About, Work, Skills, Contact, Footer} from './dock.jsx'
import './normalize.css';
import './globalStyles.scss';
function App() {
  // const scrollLocation = useScrollLoaction();
  // console.log(scrollLocation);*
  
  return (
    <div className="App">
      <NavBar/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>
      {/* <h1>Hello friend, I'm CodeName0</h1> */}
    </div>
  );
}

export default App;

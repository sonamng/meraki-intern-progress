// import './App.css';
// import React from 'react';
// import Home from './Components/Home';
// import Contect from './Components/Contect';
// import About from './Components/About';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import navgurukul from "./navgurukul.png";

// function App() {
//   return (
//     <>
//       <Router>
//         <div className='nav'>
//           <Link className='home' to="/">Home</Link>
//           <Link className='about' to="/about">About</Link>
//           <Link className='Contect' to="/Contect">Contect</Link>

//           <a href="https://www.navgurukul.org">
//             <img className="images" src={navgurukul} alt="Navgurukul-Logo" />
//           </a>

//         </div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/Contect" element={<Contect />} />
//         </Routes>
//       </Router>

//     </>

//   );
// }

// export default App;


import './App.css';
import React from 'react';
import Home from './Components/Home';
import Contect from './Components/Contect';
import About from './Components/About';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import navgurukul from "./navgurukul.png";
import Login from './Components/Login';
import Singup from './Components/Singup';




function App() {
  return (
    <>
      <Router>
        <div className='nav'>
          <Link className='home' to="/">Home</Link>
          <Link className='about' to="/about">About</Link>
          <Link className='Contect' to="/Contect">Contect</Link>
          <Link className='Login' to="/Login">Login</Link>
          <Link className='Singup' to="/Singup">Singup</Link>

          <a href="https://www.navgurukul.org">
            <img className="images" src={navgurukul} alt="Navgurukul-Logo" />
          </a>

        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contect" element={<Contect />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Singup" element={<Singup />} />
        </Routes>
      </Router>
    

    </>

  );
}

export default App;






// import React, { useState } from 'react'


// const App = () => {

//     const items = ['a','b','c','d','e'];
//     const [count, update] = useState(0);
//     const handling = () =>{
        
//         update(count+1);
    
//     }
    
//   return (
//     <div>
//       <>
//         <h1>The count is {items[count]}</h1>
//         <button onClick={handling}>Count</button>
        
//       </>
//     </div>
//   )
// }

// export default App


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <Header />
          <Home />
          
          </>
        } />
        <Route path="/about" element={<>
          <Header />
          <About />
          
          </>} />
        
      </Routes>
    </Router>
  );
}

export default App;

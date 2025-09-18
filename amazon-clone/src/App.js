
// import './App.css';



// import React from 'react';
// import Header from './Components/Header/Header';
// import Carousel from './Components/Carousel/Carousel';
// import Category from './Components/Category/Category';


// function App() {
//   return (
//     <div>
// <Header/>
// <Carousel/>
// <Category/>
//    </div>
//   )
// }

// export default App;



import React from "react";
import Header from "./Components/Header/Header";
import Carousel from "./Components/Carousel/Carousel";
import Category from "./Components/Category/Category"; // ✅ make sure this is correct

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Category /> {/* ✅ This will render your categories */}
    </div>
  );
}

export default App;
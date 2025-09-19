



import React from "react";
import Header from "./Components/Header/Header";
import Carousel from "./Components/Carousel/Carousel";
import Category from "./Components/Category/Category"; // ✅ make sure this is correct
import Product from "./Components/Product/Product"; // ✅ make sure this is correct
function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Category /> {/* ✅ This will render your categories */}
      <Product /> {/* ✅ This will render your products */}
    </div>
  );
}

export default App;
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./page/Home";
import Products from "./page/Products";
import NotFound from "./page/NotFound";
import LevelOne from "./page/LevelOne";
import SecondLevel from "./page/SecondLevel";
import ThirdLevel from "./page/ThirdLevel";
function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/products/:idone" element={<LevelOne />} />
        <Route path="/products/:idone/:idsecond" element={<SecondLevel />} />
        <Route
          path="/products/:idone/:idsecond/:idthird"
          element={<ThirdLevel />}
        />
      </Routes>
    </div>
  );
}

export default App;

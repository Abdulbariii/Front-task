import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./page/Home";
import Products from "./page/Products";
import NotFound from "./page/NotFound";
import LevelOne from "./page/LevelOne";
import SecondLevel from "./page/SecondLevel";
import { useFetch } from "./hook/useFetch";
import ThirdLevel from "./page/ThirdLevel";
import LoadingImage from "./components/LoadingImage";
function App() {
  const { data, loading, error } = useFetch(
    "https://fronttask.techeyeco.com/api/ClientSide/GetGroup?GroupProductType=FrontPageSlider"
  );
  return (
    <div className="App ">
      {loading && (
        <div className="h-screen w-full flex-col items-center flex justify-center gap-20">
          <h1 className="text-6xl">Loading ....</h1>
          <LoadingImage />
        </div>
      )}
      {error && <NotFound></NotFound>}
      {data && (
        <Routes>
          <Route
            path="/"
            element={<Home data={data} error={error} loading={loading} />}
          />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/products/:idone" element={<LevelOne />} />
          <Route path="/products/:idone/:idsecond" element={<SecondLevel />} />
          <Route
            path="/products/:idone/:idsecond/:idthird"
            element={<ThirdLevel />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;

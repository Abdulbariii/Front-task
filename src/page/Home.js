import React from "react";
import Slider from "../components/Slider";
import Title from "../components/Title";
import NewArrivals from "../components/NewArrivals";
import DiscountList from "../components/DiscountList";
import ProductList from "../components/ProductList";
export default function Home() {
  return (
    <div className="min-h-full w-full ">
      <div className="flex justify-between py-20 px-20 items-center bg-fashion h-screen">
        <Title />
        <Slider />
      </div>
      <div className="py-20 px-20 flex flex-col gap-28">
        <NewArrivals></NewArrivals>
        <DiscountList></DiscountList>
        <ProductList></ProductList>
      </div>
    </div>
  );
}

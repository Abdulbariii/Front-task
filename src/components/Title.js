import React from "react";

export default function Title() {
  return (
    <div className="">
      <h1 className="bg-[#02010143] text-8xl text-white py-2 shadow-2xl">
        {" "}
        <span className="font-normal">Fashino </span>{" "}
        <span className="font-medium ">Cloth</span>
      </h1>
      <p className="text-xl w-2/4 py-10 shadow-xl text-white">
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit..Neque porro quisquam est qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit..Neque porro quisquam
        est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..
      </p>
      <button className="bg-slate-100 text-5xl py-3 text-black px-5 ">
        Products
      </button>

      <h1 className="mt-20 text-3xl bg-slate-900 bg-opacity-40 text-red-200 font-extrabold">
        Scroll to see items(Task A){" "}
      </h1>
    </div>
  );
}
import React from "react";
import { useParams } from "react-router";
import NotFound from "./NotFound";
export default function LevelOne() {
  let { idone } = useParams();
  console.log(Number(2));
  return (
    <div className=" ">
      {Number(idone) || Number(idone) === 0 ? (
        idone <= 0 ? (
          <h1 className="text-7xl font-bold text-center">
            You are inside the main page
          </h1>
        ) : (
          <h1 className="text-7xl font-bold text-center mt-52">
            You are in the first level with identiy {idone}
          </h1>
        )
      ) : (
        <NotFound></NotFound>
      )}
    </div>
  );
}

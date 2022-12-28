import React from "react";
import { useParams } from "react-router";
import LevelOne from "./LevelOne";
import NotFound from "./NotFound";
export default function SecondLevel() {
  let { idone, idsecond } = useParams();
  console.log(useParams());
  return (
    <div>
      {Number(idsecond) || Number(idsecond) === 0 ? (
        idsecond <= 0 || idone <= 0 ? (
          <LevelOne />
        ) : (
          <h1 className="text-7xl font-bold text-center mt-52">
            {`You are inside the first level with  identity ${idone}  and second level with
        identity ${idsecond}`}
          </h1>
        )
      ) : (
        <NotFound></NotFound>
      )}
    </div>
  );
}

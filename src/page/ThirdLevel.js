import React from "react";
import { useParams } from "react-router";
import SecondLevel from "./SecondLevel";
import NotFound from "./NotFound";
export default function ThirdLevel() {
  let { idone, idsecond, idthird } = useParams();
  return (
    <div>
      {Number(idthird) || Number(idthird) === 0 ? (
        idthird <= 0 || idsecond <= 0 || idone <= 0 ? (
          <SecondLevel></SecondLevel>
        ) : (
          <h1 className="text-7xl font-bold text-center mt-52">
            {`You are inside the first level with identity ${idone} and second level with identity ${idsecond} and third level with identity ${idthird}`}
          </h1>
        )
      ) : (
        <NotFound></NotFound>
      )}
    </div>
  );
}

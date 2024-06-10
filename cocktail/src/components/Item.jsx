import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ItemContext } from "./store/ItemContext";

const Item = ({ strDrink, strAlcoholic, strGlass, idDrink, strDrinkThumb }) => {
  const { getSingleItem } = useContext(ItemContext);
  return (
    <div className="max-w-[450px] max-h-[500px] overflow-hidden border-2 rounded-lg border-emerald-900 shadow-md shadow-black">
      <img
        className="max-h-[180px] w-full"
        src={strDrinkThumb}
        alt={strDrink}
      />
      <div className="p-2">
        <p className="text-xl">{strDrink}</p>
        <p className="text-sm">{strGlass}</p>
        <p className="bg-emerald-100 text-[12px] text-emerald-800 px-1 rounded-md w-fit">
          {strAlcoholic}
        </p>
        <Link
          onClick={() => getSingleItem(idDrink)}
          to={`cocktail/${idDrink}`}
          className="bg-emerald-700 inline-block text-center text-slate-50 w-full px-4 py-2 rounded-lg mt-4 hover:bg-emerald-800"
        >
          details
        </Link>
      </div>
    </div>
  );
};

export default Item;

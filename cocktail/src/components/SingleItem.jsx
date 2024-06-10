import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: img,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            img,
            info,
            category,
            instructions,
            ingredients,
            glass,
          };
          setItem(newCocktail);
        }
      });
  }, [id]);

  if (!item) {
    return <p>loading...</p>;
  }

  return (
    <section>
      <Link
        to={"/"}
        className="block w-fit mx-auto px-6 py-2 rounded-lg shadow-black shadow-sm text-white hover:bg-emerald-600 bg-emerald-500"
      >
        Back Home
      </Link>
      <p className="text-center font-bold mt-4 text-4xl mb-4">{item.name}</p>
      <div className="md:w-[90%]  w-full mx-auto grid grid-cols-1 sm:grid-cols-2">
        <img
          className="max-w-[300px] mx-auto  shadow-md shadow-slate-800 rounded-lg object-center lg:max-w-[450px] w-full mb-12"
          src={item.img}
          alt=""
        />
        <div className="w-[80%] mx-auto ">
          <p className="py-3">
            <span className="bg-emerald-600 px-2 mr-4 capitalize text-white py-1 rounded-lg">
              name:
            </span>
            {item.name}
          </p>
          <p className="py-3">
            <span className="bg-emerald-600 px-2 mr-4 capitalize text-white py-1 rounded-lg">
              category:
            </span>
            {item.category}
          </p>
          <p className="py-3">
            <span className="bg-emerald-600 px-2 mr-4 capitalize text-white py-1 rounded-lg">
              info:
            </span>
            {item.info}
          </p>
          <p className="py-3">
            <span className="bg-emerald-600 px-2 mr-4 capitalize text-white py-1 rounded-lg">
              glass:
            </span>
            {item.glass}
          </p>
          <p className="py-3">
            <span className="bg-emerald-600 px-2 mr-4 capitalize text-white py-1 rounded-lg">
              instructions:
            </span>
            {item.instructions}
          </p>
          <p className="py-3">
            <span className="bg-emerald-600 px-2 mr-4 capitalize text-white py-1 rounded-lg">
              incredients:
            </span>
            {item.ingredients.map((ing) => {
              return ing ? <span key={ing}>{ing}, </span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleItem;

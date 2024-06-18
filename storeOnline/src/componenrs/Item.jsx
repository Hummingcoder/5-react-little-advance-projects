import React, { useContext, useEffect, useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { QuoteContext } from "../data/dataContext";
import { json } from "react-router";
const Item = ({ author, text }) => {
  const { next, prev, quotes, index, check, addTOBookmark } =
    useContext(QuoteContext);

  const [booked, setbooked] = useState(check(quotes[index]));

  useEffect(() => {
    setbooked(check(quotes[index]));
  }, [quotes, index, addTOBookmark]);

  return (
    <div className="w-[80%] bg-white mx-auto max-w-[400px] min-w-[260px] shadow-lg rounded-lg border border-black p-4 text-center">
      <div className="w-full min-h-[100px] mb-4 ">
        <p className="text-2xl font-serif">"{text}"</p>
        <p className="capitalize text-gray-700 ">{author.split(",")[0]}</p>
      </div>
      <div className="flex justify-between items-center w-[60%] mx-auto">
        {" "}
        <button
          onClick={() => {
            next();
          }}
          className="text-blue-400 hover:text-blue-600 duration-75 hover:bg-gray-100 rounded-full p-1"
        >
          <IoIosArrowBack size={24} />
        </button>
        <button
          onClick={() => {
            addTOBookmark(quotes[index]);
            setbooked(check(quotes[index]));
          }}
          className="hover:scale-105 duration-75 hover:bg-gray-100 p-2 rounded-full"
        >
          {booked ? <FaBookmark /> : <FaRegBookmark />}
        </button>
        <button
          onClick={() => {
            next();
          }}
          className="text-blue-400 hover:text-blue-600 duration-75 hover:bg-gray-100 rounded-full p-1"
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>
    </div>
  );
};

export default Item;

import React, { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { QuoteContext } from "../data/dataContext";
const Bookmarks = () => {
  const [data, setdata] = useState([]);

  const deleteBookmark = (x) => {
    let newData = data.filter((item) => item !== x);
    setdata(newData);
    localStorage.setItem("bookdata", JSON.stringify(newData));
  };

  useEffect(() => {
    let arr = JSON.parse(localStorage.getItem("bookdata"));

    setdata(arr);
  }, []);

  return (
    <section className="max-w-[900px] mx-auto mt-4 md:mt-14 w-full flex justify-center items-center flex-wrap">
      {data.map((item, i) => (
        <div
          className="flex justify-between items-center shadow-md rounded-lg py-1 px-2 mb-2 w-[80%] max-w-[400px] mx-auto"
          key={i}
        >
          <div className="w-[80%]">
            {" "}
            <p className="text-base ">"{item.text}"</p>
            <p className="text-sm text-gray-700 pl-3">{item.author}</p>
          </div>
          <button
            onClick={() => deleteBookmark(item)}
            className="hover:bg-slate-200 p-2 rounded-full"
          >
            <MdDelete size={25} />
          </button>
        </div>
      ))}
    </section>
  );
};

export default Bookmarks;

import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa6";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import QuoteContextProvider from "./data/dataContext";
const App = () => {
  return (
    <QuoteContextProvider>
      <section>
        <nav className="w-full h-[60px]  flex justify-between items-center px-3 sm:px-12 lg:px-24">
          <Link to={"/"} className="text-2xl font-semibold">
            Quates
          </Link>
          <Link
            to={"bookmarks"}
            className="border inline-block border-black shadow-md bg-white hover:bg-slate-100 rounded-lg px-2 py-1"
          >
            Bookmarks
          </Link>
        </nav>
        <Outlet />
      </section>
    </QuoteContextProvider>
  );
};

export default App;

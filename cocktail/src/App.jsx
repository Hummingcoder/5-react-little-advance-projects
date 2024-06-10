import React from "react";
import { Outlet } from "react-router";
import ItemContextProvider from "./components/store/ItemContext";

const App = () => {
  //

  return (
    <ItemContextProvider>
      <main className="w-full h-screen p-2 lg:p-12 flex flex-col justify-start items-center">
        <Outlet />
      </main>
    </ItemContextProvider>
  );
};

export default App;

import React, { useContext } from "react";
import Item from "./Item";
import { QuoteContext } from "../data/dataContext";

const Quotes = () => {
  const { quotes, index } = useContext(QuoteContext);

  return (
    <div className="w-full h-[80vh] grid place-content-center">
      {quotes.length > 0 && <Item {...quotes[index]} />}
    </div>
  );
};

export default Quotes;

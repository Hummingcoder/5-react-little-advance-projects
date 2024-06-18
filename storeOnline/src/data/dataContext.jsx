import { createContext, useEffect, useState } from "react";

export const QuoteContext = createContext({
  quotes: [],
  index: 0,
  bookdata: [],
  check: () => {},
  next: () => {},
  prev: () => {},
  addTOBookmark: () => {},
});

const QuoteContextProvider = ({ children }) => {
  const [quotes, setQuotes] = useState([]);
  const [index, setIndex] = useState(0);

  const check = (x) => {
    let data = JSON.parse(localStorage.getItem("bookdata"));
    return data.some((item) => JSON.stringify(item) === JSON.stringify(x));
  };

  const addTOBookmark = (obj) => {
    let newdata = { ...obj };
    let data = JSON.parse(localStorage.getItem("bookdata"));
    let has = data.some(
      (item) => JSON.stringify(item) === JSON.stringify(newdata)
    );

    if (has) {
      data = data.filter(
        (item) => JSON.stringify(item) !== JSON.stringify(obj)
      );
    } else {
      data.push(obj);
    }
    localStorage.setItem("bookdata", JSON.stringify(data));

    check();
  };

  const next = () => {
    if (index < quotes.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(0);
    }
  };
  const prev = () => {
    if (index > quotes.length) {
      setIndex((prev) => prev - 1);
    } else {
      setIndex(quotes.length - 1);
    }
  };

  const fetchQuotes = async () => {
    const res = await fetch("https://type.fit/api/quotes");

    const data = await res.json();

    setQuotes(data);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookdata"));
  }, [index]);

  return (
    <QuoteContext.Provider
      value={{
        quotes,
        index,
        next,
        prev,
        check,
        addTOBookmark,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export default QuoteContextProvider;

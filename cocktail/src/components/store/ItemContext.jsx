import { createContext, useEffect, useReducer } from "react";

export const ItemContext = createContext({
  itemList: [],
  initialData: () => {},
  singleItem: {},
  getSingleItem: () => {},
});

const itemListReducer = (currval, action) => {
  if (action.type === "INITIAL_DATA") {
    return {
      ...currval,
      itemList: action.payload.data || [],
    };
  } else if (action.type === "SINGLE_DATA") {
    return {
      ...currval,
      singleItem: action.payload.single,
    };
  }
};

const ItemContextProvider = ({ children }) => {
  const [state, dispatchItemList] = useReducer(itemListReducer, {
    itemList: [],
    singleItem: {},
  });
  const initialData = (data) => {
    dispatchItemList({ type: "INITIAL_DATA", payload: { data } });
  };
  const getSingleItem = (id) => {
    const single = state.itemList.find((item) => item.idDrink === id);
    dispatchItemList({
      type: "SINGLE_DATA",
      payload: { single },
    });
  };

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => {
        initialData(data.drinks);
      });
  }, []);

  return (
    <ItemContext.Provider
      value={{
        itemList: state.itemList,
        getSingleItem,
        singleItem: state.singleItem,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;

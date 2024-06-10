import React, { useContext, useEffect, useState } from "react";
import Item from "./Item";
import { ItemContext } from "./store/ItemContext";

const Container = () => {
  const { itemList } = useContext(ItemContext);
  const [items, setItems] = useState([...itemList]);
  const [filtering, setfiltering] = useState("");
  useEffect(() => {
    setItems([...itemList]);
  }, [itemList]);

  const handleChange = () => {
    let keyword = filtering.toLocaleLowerCase();
    let newList = itemList.filter(
      (item) => item.strDrink.toLocaleLowerCase().indexOf(keyword) > -1
    );
    setItems(newList);
    console.log(newList);
  };

  useEffect(() => {
    handleChange();
  }, [filtering]);

  return (
    <section>
      <form className="max-w-[400px] w-full mx-auto mb-14 border-2 border-black rounded-lg overflow-hidden bg-white shadow-sm">
        <input
          value={filtering}
          onChange={(e) => {
            setfiltering(e.target.value);
          }}
          className="px-6 py-3 w-full h-full outline-none"
          type="text"
          placeholder="search"
        />
      </form>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {items.map((item) => (
          <Item key={item.idDrink} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Container;

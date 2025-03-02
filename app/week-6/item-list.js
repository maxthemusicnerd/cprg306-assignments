"use client"
import Item from "./item.js"; 
import list from "./items.json";
import { useState, useEffect } from 'react';

export default function ItemList() {

  const [sortBy, setSortBy] = useState("name");
  const [items, setItems ]= useState(list);


  useEffect(() => {
    setItems(prev => [...prev].sort((a, b) => a[sortBy].localeCompare(b[sortBy])));
  }, [sortBy]);


  function buttonClick() {
    if(sortBy === "name") {
      setSortBy(prev => prev = "category")
    } else {
      setSortBy(prev => prev = "name")
    }
  }

  return (
    <div>
      <button className="rounded-xl bg-blue-500 p-4 m-8" onClick={buttonClick}>Sort by: {sortBy}</button>
      <div>
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

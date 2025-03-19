"use client"
import ItemList from "./item-list"
import NewItem from "./new-item"
import list from "./items.json"
import MealIdeas from "./meal-ideas"
import { useState } from "react"


export default function Page() {

    const [listofItems, setListOfItems] = useState(list)
    const [selectedItemName, setSelectedItemName] = useState("chicken");

    function handleAddItems(anItem) {
        setListOfItems(prev => [...prev, anItem])
    }

    function handleItemSelect(item) {
        console.log("Worked!");
        let text = "";
        if (item) {
            text = item.name  
        }
        text = text.split(",")[0]
        text = text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        console.log(text)
        setSelectedItemName(text)
    }

    return(
        <main>
            <MealIdeas ingredient={selectedItemName}></MealIdeas>
            <NewItem onAddItem={handleAddItems}></NewItem>
            <ItemList itemList={listofItems} onItemSelect={handleItemSelect}></ItemList>
        </main>
    );
}
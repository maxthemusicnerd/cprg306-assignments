"use client"
import ItemList from "./item-list"
import NewItem from "./new-item"
import list from "./items.json"
import { useState } from "react"


export default function Page() {

    const [listofItems, setListOfItems] = useState(list)

    function handleAddItems(anItem) {
        setListOfItems(prev => [...prev, anItem])
    }


    return(
        <main>
            <NewItem onAddItem={handleAddItems}></NewItem>
            <ItemList itemList={listofItems}></ItemList>
        </main>
    );
}
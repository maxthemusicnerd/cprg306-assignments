"use client"
import ItemList from "./item-list"
import NewItem from "./new-item"
import MealIdeas from "./meal-ideas"
import { useState, useEffect } from "react"
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";
import {addItem, getItems} from "../_services/shopping-list-services";


export default function Page() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const [listofItems, setListOfItems] = useState([])
    const [selectedItemName, setSelectedItemName] = useState(null);

    function handleAddItems(anItem) {
        let itemId = addItem(user.uid, anItem)
        anItem.id = itemId
        if (Array.isArray(listofItems)) {
            setListOfItems(prev => [...prev, anItem])
        } else {
            setListOfItems([anItem])
        }
        
        
    }

    const logout = async () => {
        await firebaseSignOut();
    }

    const loadItems = async () => {
        if (user) { 
            console.log("loading items!")
            const items = await getItems(user.uid); 
            setListOfItems(items || []); 
        }
    };

    useEffect(() => {
        loadItems();
    }, [user]);

    function handleItemSelect(item) {
        let text = "";
        if (item) {
            text = item.name  
        }
        text = text.split(",")[0]
        text = text.split(" ")[0]
        text = text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        console.log(text)
        setSelectedItemName(text)
    }

    return(
        <main>
            <div>
                {user ? (
                    <div>
                        <h1>Hello, {user.displayName}!!</h1>
                        <button onClick={logout} className="m-10 p-5 rounded-xl bg-red-400">Logout</button>
                        <MealIdeas ingredient={selectedItemName}></MealIdeas>
                        <NewItem onAddItem={handleAddItems}></NewItem>
                        <ItemList itemList={listofItems} onItemSelect={handleItemSelect}></ItemList>
                    </div>
                ) : (
                    <div>
                        <div>Not logged in</div>
                        <Link href="/week-10" className="block text-blue-400 underline">To login page</Link>
                    </div>
                )}
            </div>
        </main>
    );
}
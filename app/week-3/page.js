import ItemList from "./item-list.js";

export default function Page() {
    return(
        <main className="bg-orange-100">
            <h1 className="text-black">Shopping List</h1>
            <ItemList></ItemList>
        </main>
        
    )
}
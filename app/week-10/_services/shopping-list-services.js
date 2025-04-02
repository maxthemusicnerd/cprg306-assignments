
import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, getDoc, doc } from "firebase/firestore";


export const getItems = async (userId) => {
    try {
        const itemsCollectionRef = collection(db, "users", userId, "items");
        const querySnapshot = await getDocs(itemsCollectionRef);

        const items = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        console.log("it work?", items)

        return items;
    } catch (error) {
        console.log("Error in Firestore:", error);
        return [];
    }
};

export const addItem = async (userId, item) => {
    try {
        const docRef = await addDoc(collection(db, "users", userId, "items"), item)
        return docRef.id
    } catch (error) {
        console.log("firestore addItem error: ", error)
    }
}
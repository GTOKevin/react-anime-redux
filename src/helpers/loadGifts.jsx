import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/firebase-config";

export const loadGifts = async(uid) => {

    const q = query(collection(db,'Gift'),where('userId',"==",uid));

    const giftsSnap=[];



    const querySnap=await getDocs(q);

    querySnap.forEach(snapHijo=>{
        giftsSnap.push({
            id : snapHijo.id,
            ...snapHijo.data()
        })
    })
    return giftsSnap;


}

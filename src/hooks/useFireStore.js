import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import React from 'react';
import { db } from '../firebase/config';


export default   function useFireStore(collections,condition) {
    const [Documents,setDocuments] = React.useState([]);
    React.useEffect( () => { 
        let q ;
        if(condition){
            if(!condition.value || !condition.value.length){
                setDocuments([]);
                return;
            }
             q = query(collection(db, collections), where(condition.field,condition.operator,condition.value),orderBy('createdAt','desc'));
        }
        const unsubscribe =  onSnapshot(q, (querySnapshot) => {
        var  documents = [];
            querySnapshot.forEach((doc) => {
                documents =documents.concat([{...doc.data(),id:doc.id}]);
            });
            setDocuments(documents);
        });
        
       
        return unsubscribe;
    }, [collections,condition]);
    return Documents;
}

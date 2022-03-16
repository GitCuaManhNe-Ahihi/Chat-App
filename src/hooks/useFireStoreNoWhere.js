import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import React from 'react';
import { db } from '../firebase/config';


export default function useFireStoreNoWhere (collections) {
    const [Documents,setDocuments] = React.useState([]);
    React.useEffect( () => { 
      const q = query(collection(db, collections),orderBy('status','desc'),limit(20));
      const unsubscribe =  onSnapshot(q, (querySnapshot) => {
        var  documents = [];
            querySnapshot.forEach((doc) => {
                documents =documents.concat([{...doc.data(),id:doc.id}]);
            });
            setDocuments(documents);
        });
        return unsubscribe;
    }, [collections]);
    return Documents;
}


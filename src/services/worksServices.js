import firebase from "../firebaseConfig"


export const getAllWorks=(onGetWorks)=>{
firebase
    .firestore()
    .collection('works')
    .onSnapshot((snapshot)=>{
        const allWorks = snapshot.docs.map((doc)=>({
            id:doc.id,
                ...doc.data()
        }))
        onGetWorks(allWorks)
    })
}

export const addWork=(data)=>{
    firebase
        .firestore()
        .collection('works')
        .add(data)
}

export const deleteWork=()=>{

}

export const updateWork=()=>{

}

export const getWorkById=()=>{

}
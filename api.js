import {initializeApp} from "firebase/app"
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,
    query,
    where,
    documentId
} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyDDO0wf3mFup9-mYmmY88rGO0u0x9EHmbQ",
  authDomain: "audiophile-e-commerce-we-19db5.firebaseapp.com",
  projectId: "audiophile-e-commerce-we-19db5",
  storageBucket: "audiophile-e-commerce-we-19db5.appspot.com",
  messagingSenderId: "229071309307",
  appId: "1:229071309307:web:3bb8a0482d9b704e61635e",
  measurementId: "G-C1TSMJRWKG"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const productsCollectionRef = collection(db, "products")

export async function getProducts(){
    const snapshot = await getDocs(productsCollectionRef)
    const products = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return products
}

import firebaseApp from '.'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

export async function getData(collection: any, id: any) {
  const db = getFirestore(firebaseApp)

  let docRef = doc(db, collection, id)
  let result = null
  let error = null

  try {
    result = await getDoc(docRef)
  } catch (e) {
    error = e
  }

  return { result, error }
}

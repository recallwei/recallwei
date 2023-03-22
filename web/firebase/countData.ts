import firebaseApp from '.'
import { getFirestore, collection, query, getCountFromServer } from 'firebase/firestore'

export async function countData(collectionKey: any) {
  const db = getFirestore(firebaseApp)

  let result = null
  let error = null

  try {
    result = (await getCountFromServer(query(collection(db, collectionKey)))).data().count
  } catch (error) {
    error = error
  }

  return { result, error }
}

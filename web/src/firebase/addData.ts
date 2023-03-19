import firebaseApp from '.'
import { getFirestore, doc, setDoc, serverTimestamp } from 'firebase/firestore'

export async function addData(collection: any, id: any, data: any) {
  const db = getFirestore(firebaseApp)
  let result = null
  let error = null
  data.createTime = serverTimestamp()

  try {
    result = await setDoc(doc(db, collection, id), data, {
      merge: true
    })
  } catch (error) {
    error = error
  }

  return { result, error }
}

'use client'
import { useEffect, useState } from 'react'
import {
  collection,
  addDoc,
  serverTimestamp,
  getFirestore,
  query,
  orderBy,
  onSnapshot,
  limit
} from 'firebase/firestore'
import DB, { addData, countData } from '@/firebase'

const ActionButton = (): JSX.Element => {
  const [starCount, setStarCount] = useState(0)

  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    countData('starCount').then((res) => {
      setStarCount(res.result ?? 0)
    })
  }, [])

  useEffect(() => {
    const q = query(collection(getFirestore(DB), 'messages'), orderBy('createdAt'), limit(100))
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const messages: any = []
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id })
      })
      messages.reverse()
      setMessages(messages)
    })
    return () => unsubscribe()
  }, [])

  const handleClickBtn = async () => {
    await addData('starCount', serverTimestamp(), {})
    const { result } = (await countData('starCount')) || {}
    setStarCount(result || 0)
  }

  const sendMessage = async () => {
    if (message.trim() === '') {
      alert('请输入消息')
      return
    }
    await addDoc(collection(getFirestore(DB), 'messages'), {
      text: message,
      createdAt: serverTimestamp(),
      id: Math.ceil(Math.random() * 10000)
    })
    setMessage('')
  }

  return (
    <>
      <button
        className="btn-success btn-sm btn gap-2"
        onClick={() => handleClickBtn()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        {starCount}
      </button>

      <div className="flex items-center space-x-2">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="请输入"
          className="input-bordered input-primary input input-sm w-full max-w-xs"
        />
        <button
          className="btn-primary btn-sm btn"
          onClick={() => sendMessage()}
        >
          发送
        </button>
      </div>

      <div className="min-h-[200px] w-full overflow-y-scroll">
        {messages?.map((message: any) => (
          <div key={message.id}>{message.text}</div>
        ))}
      </div>
    </>
  )
}

export default ActionButton

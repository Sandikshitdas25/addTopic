"use client"
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const router = useRouter()
  const handleSubmit = async (e)=>{
    e.preventDefault()

    if(!title || !description){
      alert("title and description is mandatory")
    }

    try {
      const res = await fetch("http://localhost:3000/api/topic",{
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({title, description})
      })


      if(res.ok){
        router.push("/")
      }else{
        throw new Error ("failed to create topic")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col items-center gap-5'>
        <div><input type='text' placeholder='Title' className='border-[2px] border-gray-600  p-4 rounded-lg w-[70vw]' value={title} onChange={(e=>setTitle(e.target.value))}/></div>
        <div><input type='text' placeholder='Description' className='border-[2px] border-gray-600 h-[18vh] p-3 rounded-lg w-[70vw] text-wrap' value={description} onChange={(e)=>setDescription(e.target.value)}/></div>
        <div className='bg-green-500 px-5 py-2 rounded-lg font-semibold'><button type='submit'>Add</button></div>
      </form>
    </>
  )
}

export default page

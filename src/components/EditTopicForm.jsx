"use client"
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
const EditTopicForm = ({ id, newTitle, newDescription }) => {
    const router = useRouter()
    const [title, setTitle] = useState(newTitle)
    const [description, setDescription] = useState(newDescription)
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(`http://localhost:3000/api/topic/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ title, description })
            })

            if (res.ok) {
                router.push("/")
            } else {
                throw new Error("failed to create topic")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            hello
            <form className='flex flex-col items-center gap-5'>
                <div><input type='text' placeholder='Title' className='border-[2px] border-gray-600  p-4 rounded-lg w-[70vw]' value={title} onChange={(e => setTitle(e.target.value))} /></div>
                <div><input type='text' placeholder='Description' className='border-[2px] border-gray-600 h-[18vh] p-3 rounded-lg w-[70vw] text-wrap' value={description} onChange={(e) => setDescription(e.target.value)} /></div>
                <div className='bg-green-500 px-5 py-2 rounded-lg font-semibold cursor-pointer'><button type='submit' onClick={handleSubmit}>Update</button></div>
            </form>
        </>
    )
}

export default EditTopicForm

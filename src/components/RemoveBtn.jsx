
import React from 'react'
import { useRouter } from 'next/navigation'
const RemoveBtn = ({ id }) => {
    const router = useRouter()
    const handleDelete = async ()=>{
        const confirmed = confirm("Are you sure want to delete?")

        if(confirmed){
            const res = await fetch(`http://localhost:3000/api/topic?id=${id}`,{
                method: "DELETE"
            })

            if(res.ok){
                router.refresh()
            }
        }
    }

    return (
        <div>
            <img src='delete.svg' onClick={handleDelete} />
        </div>
    )
}

export default RemoveBtn

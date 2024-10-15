"use client"
import Link from "next/link"
import RemoveBtn from "@/components/RemoveBtn" 

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topic", { cache: "no-store" })
    if (!res.ok) {
      throw new Error("failed to fetch")
    }

    return res.json()
  } catch (error) {
    console.log(error)
  }
}
export default async function Home() {
  const { topics } = await getTopics()

  return (
    <>
      {topics.map(t => {
        return <div className="border-[2px] w-[70vw] mx-auto p-4 rounded mt-5">
          <div className="border-[1px] p-2 rounded flex justify-between">
            <span className="text-2xl font-semibold">{t.title}</span>
            <div className="flex gap-2">
              <Link href={`/editTopic/${t._id}`}><span className="cursor-pointer"><img src="edit.svg" /></span></Link>
              <span className="cursor-pointer"><RemoveBtn id={t._id}/></span>
            </div>
          </div>
          <div className="p-2 rounded">{t.description}</div>
        </div>
      })}
    </>
  );
}

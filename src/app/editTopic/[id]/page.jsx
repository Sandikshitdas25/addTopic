
import EditTopicForm from '@/components/EditTopicForm'
const getTopicByID = async (id)=>{
  try {
    const res = await fetch(`http://localhost:3000/api/topic/${id}`,{cache: "no-store"})
    if(!res.ok){
      throw new Error("failed to fetch topic")
    }

    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export default async function editTopic({params}){
  const { id } = params;
  const { topic } = await getTopicByID(id);
  const { title, description } = topic;
  return <EditTopicForm  id={id} newTitle={title} newDescription={description}/>
}


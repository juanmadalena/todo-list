import { AiOutlineCheck, AiOutlineDelete } from "react-icons/ai";
import { useTaskStore } from "../store/tasks";

export default function Task({id, title, isDone, priority}){

    const { completeTask, deleteTask } = useTaskStore()

    const handleDrag = (e) => {
        console.log(e);
    }

    return (
        <section onDrag={handleDrag} className={` ${isDone ? 'opacity-30' : 'opacity-100'} flex justify-between px-6 h-20 w-full sm:h-24 ${priority ? 'bg-yellow-100' : 'bg-slate-100'} rounded-3xl`}>
            <section className="flex items-center">
                <h4 className={`text-2xl font-semibold ${isDone ? 'line-through' : ''}`}>
                    { title }
                </h4>
            </section>
            <section className="flex items-center">
                {
                    isDone 
                    ?
                    <div  onClick={() => deleteTask(id)} className="p-3 rounded-full opacity-50 backdrop-brightness-90 hover:opacity-100">
                        <AiOutlineDelete className="text-2xl" />
                    </div>
                    :
                    <div  onClick={() => completeTask(id)} className="p-3 rounded-full opacity-50 backdrop-brightness-90 hover:opacity-100">
                        <AiOutlineCheck className="text-2xl" />
                    </div>
                }
            </section>
        </section>
    )
}
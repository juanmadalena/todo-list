import { useRef, useState } from "react"
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai"
import ModalContainer from "./ModalContainer"
import { TASK_TYPES } from "../config/constants"
import { useTaskStore } from '../store/tasks'

export default function AddButton(){

    const [ dialog, setDialog ] = useState(false)
    const [ inputError, setInputError ] = useState(false)

    const { tasks, addNewTask } = useTaskStore()

    const title = useRef(null)
    const priority = useRef(0)

    const handleDialog = () => {
        title.current = null;
        priority.current = 0;
        setDialog(!dialog)
    }

    const submitTaskForm = (e) => {
        e.preventDefault()

        if(title.current.trim().length < 3 || priority.current < 0 || priority.current > 1){
            return setInputError(true)
        }
        
        try{
            addNewTask({
                id: Math.random(),
                date: new Date().getTime(),
                title: title.current,
                priority: priority.current,
                is_done: false
            })      
        }
        finally{
            setInputError(false)
            handleDialog()
        }
    }

    return(
        <>
            <section className="fixed bottom-7 right-3 p-4 rounded-full backdrop-blur-sm">
                <button onClick={handleDialog} className="h-14 w-14 rounded-full flex items-center justify-center bg-opacity-30 hover:bg-opacity-80 bg-slate-100">
                    <AiOutlinePlus className="text-xl" />
                </button>
            </section>
            {
                dialog ?
                <ModalContainer>
                    <section className="border flex items-center justify-center h-full w-full">
                        <div className="flex justify-between flex-col h-96 w-9/12 md:w-1/3 rounded-3xl py-4 px-3 bg-slate-50 bg-opacity-95 shadow-xl">
                            <div className="">
                                <button onClick={handleDialog} className="p-4 rounded-full bg-slate-100 hover:bg-slate-200">
                                    <AiOutlineClose />
                                </button>
                            <form onSubmit={submitTaskForm} className="flex flex-col justify-start mt-5 px-3">
                                <div className="mb-4">
                                    <label className="block text-xl" htmlFor="input-title">Title</label>
                                    <input onChange={(e) => title.current = e.target.value} required className={`h-12 w-full border rounded-lg bg-slate-100 px-1 focus:outline-none focus:ring-2 focus:border-transparent ${inputError ? 'focus:ring-red-400 outline outline-red-400' : 'focus:ring-slate-300'}`} type="text" name="title" id="input-title" />
                                </div>
                                <div className="">
                                    <label className="block text-xl" htmlFor="input-priority">Priority</label>
                                    <select onChange={(e) => priority.current = e.target.value} required className="h-12 w-full border border-slate-200 rounded-lg bg-slate-100 px-1 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent" name="priority" id="input-priority">
                                        {
                                            TASK_TYPES.map(({title, priority}) => (
                                                <option className="h-12 bg-slate-100" value={priority}>{title}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </form>
                            </div>
                            <div className="flex justify-end gap-4">
                                <button onClick={handleDialog} type="button" className="p-4 rounded-full bg-slate-50">
                                    Cancel
                                </button>
                                <button onClick={submitTaskForm} type="submit" className="border border-slate-100 p-4 rounded-full bg-slate-100 hover:bg-slate-200">
                                    New Task
                                </button>
                            </div>
                        </div>
                    </section>
                </ModalContainer>
                : null
            }
        </>
    )
}
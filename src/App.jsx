import './App.css'
import Heading from './components/Heading'
import Navbar from './components/Navbar'
import Board from './components/Board'
import Task from './components/Task'
import AddButton from './components/AddButton'
import { useTaskStore } from './store/tasks'
import { AiOutlineUnorderedList, AiOutlineFire } from 'react-icons/ai'
import { useEffect, useRef } from 'react'

function App() {

  const isLogged = useRef(false)

  console.log(isLogged);

  useEffect(() => {
    const user = localStorage.getItem('user')
    console.log(user);
  }, [])

  const { tasks } = useTaskStore()

  const important = tasks.filter(({priority}) => priority);
  const regular = tasks.filter(({priority}) => !priority);
  const done = tasks.filter(({is_done}) => is_done == 1);

  useEffect(()=>{
    document.title = `${tasks.length - done.length > 0 ? `(${tasks?.length - done.length})` : ''} Todo List`
  }, [tasks])

  return (
    <>
      <Heading />
      <Navbar tasks={tasks}/>
      <Board>
        {
          important?.length > 0 ?
          <div className='flex gap-2 items-center text-lg col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4'> 
            <span>    
              <AiOutlineFire /> 
            </span>
            <span>
              Important
            </span>
          </div>
          : null
        }
        {
          important?.map( ({ id, title, is_done, priority }) => (
            <Task id={id} title={title} isDone={is_done} priority={priority} key={id}/>
          ))
        }
        {
          regular?.length > 0 ?
          <div className='flex gap-2 items-center text-lg col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4'> 
            <span>    
              <AiOutlineUnorderedList /> 
            </span>
            <span>
              Regular
            </span>
          </div>
          : null
        }
        {
          regular?.map( ({ id, title, is_done }) => (
            <Task id={id} title={title} isDone={is_done} key={id}/>
          ))
        }
      <div className='h-24'></div>
      <AddButton />
      </Board>
      {/* {
        isLogged.current ||
        <ModalContainer>
          Logeate mi loco
        </ModalContainer>
      } */}
    </>
  )
}

export default App

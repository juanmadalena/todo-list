import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useTaskStore = create(
    persist(
        (set) => ({
          tasks: [],
          addNewTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
          completeTask: (id) => set((state) => ({ tasks: state.tasks.map( task => {
            console.log(task);
            if(task.id == id) {
                task.is_done = 1
                task.completed = new Date().getTime()
            }
                return task
            }
        )})),
          deleteTask: (taskId) => set((state) => ({ tasks: state.tasks.filter( ({id}) => id != taskId) })),
        }),
        {
          name: 'tasksStore'
        }
      )
);
import { NAV_OPTIONS } from "../config/constants"

export default function Navbar({tasks}){

    function getNumTaksByType(type){
        if(type == 'all'){
            return tasks?.length
        }
        if(type == 'regular'){
            return tasks.filter(({priority, is_done}) => priority == 0 && is_done == 0).length
        }
        if(type == 'important'){
            return tasks.filter(({priority, is_done}) => priority == 1 && is_done == 0).length
        }
        if(type == 'done'){
            return tasks.filter(({is_done}) => is_done == 1).length
        }
    }

    function selectFilter(type){
        console.log(type);
    }

    return(
        <nav className="sticky top-0 z-50 py-4 pl-6 bg-white lg:pl-0">
            <ul className="overflow-auto text-lg flex items-end gap-2 pb-2 sm:w-auto sm:gap-10 justify-start sm:justify-center">
                {
                    NAV_OPTIONS.map(({title, type}) => (
                        <li onClick={() => selectFilter(type)} key={title} className="flex items-center px-6 py-2 border rounded-full opacity-60 hover:opacity-100 hover:border-gray-400 cursor-pointer">
                            <span>
                                {title}
                            </span>
                            <span className="ml-3 text-xs py-2 px-3 rounded-full bg-slate-100">
                                {
                                    getNumTaksByType(type) ?? 0
                                }
                            </span>
                        </li>
                    ))
                }
                <li className="mr-3">
                </li>
            </ul>
        </nav>
    )
}
export default function Heading(){

    return (
        <header className="pt-3 px-6 flex justify-between items-start sm:items-center bg-white">
            <h1 className="text-8xl">
                My <br className="block sm:hidden" /> Tasks
            </h1>
            <div className="h-16 w-16 mt-4 sm:mt-0 flex items-center justify-center bg-slate-100 rounded-full">
                <p className="font-bold text-3xl">
                    🥸
                </p>
            </div>
        </header>
    )
}
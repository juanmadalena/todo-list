export default function Board({ children }){
    return (
        <main className="px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {children}
        </main>
    )
}
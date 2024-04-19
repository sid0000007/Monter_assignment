
export const Navbar = () => {
    return (
        <>
            <header className=" text-black">
                <div className="container flex justify-between h-16 mx-auto">
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                    </ul>
                    <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                        <h1 className="font-bold">Recently Generated Reports</h1>
                    </a>
                    <div className="flex items-center md:space-x-4">
                        <a href="#" className="border-2 border-black rounded-lg"><img className="w-6" src="/filter.png" alt="" /></a>
                        <a href="#" className="border-2 border-black rounded-lg"><img  className="w-6"src="/remove.png" alt="" /></a>
                    </div>
                </div>  
            </header>
        </>
    )
}

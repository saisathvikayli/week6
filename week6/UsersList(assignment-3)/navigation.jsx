function Navbar()
{
    return(
        <div>
            <div className="flex bg-indigo-500 justify-between h-2xl">
            <h1 className="text-3xl">Logo</h1>
            <ul className="flex w-2xs justify-between align-middle">
                <li><a href="">Home</a></li>
                <li><a href="">Login</a></li>
                <li><a href="">Sign Up</a></li>
            </ul>
            </div>
        </div>
    )
}

export default Navbar
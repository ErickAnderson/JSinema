function NavBar() {
    return (
        <nav className="flex items-center justify-between mt-2 sm:mt-4">
            <a href="/" aria-label="Home">
                <h1 className="sm:text-2xl font-bold text-zinc-950 dark:text-white"><span className="text-yellow-400">JS</span>inema</h1>
            </a>
        </nav>
    );
}

export default NavBar;
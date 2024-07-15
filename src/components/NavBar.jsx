function NavBar() {
    return (
        <nav className="flex items-center justify-between">
            <h1 className="md:text-2xl font-bold text-zinc-950 dark:text-white"><span className="text-yellow-400">JS</span>inema</h1>

            {/*View watchlist button*/}
            <a
                href="#"
                aria-label="View watchlist"
                title="View your watchlist"
                className="text-yellow-400 hover:font-bold text-sm"
            >
                View watchlist
            </a>
        </nav>
    );
}

export default NavBar;
function NavBar() {
    return (
        <nav className="flex items-center justify-between mt-2 md:mt-4">
            {/* @TODO remove anchor link if not using page routers */}
            <a href="#" aria-label="Home">
                <h1 className="md:text-2xl font-bold text-zinc-950 dark:text-white"><span className="text-yellow-400">JS</span>inema</h1>
            </a>

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
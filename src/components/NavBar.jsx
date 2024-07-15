function NavBar() {
    return (
        <nav className="flex items-center justify-between">
            <h1 className="md:text-2xl font-bold"><span className="text-yellow-400">JS</span>inema</h1>

            {/* @TODO View watchlist button */}
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
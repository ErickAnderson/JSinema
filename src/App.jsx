import {SearchProvider} from "./context/SearchContext.jsx";
import {MoviesProvider} from "./context/MoviesContext.jsx";

import NavBar from "./components/NavBar.jsx";
import Form from "./components/Form.jsx";
import MovieList from "./components/MovieList.jsx";
import MovieCard from "./components/MovieCard.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <>
            <SearchProvider>
                <header className="bg-slate-950">
                    <div className="container max-w-7xl mx-auto flex flex-col gap-4 p-2 md:p-4">
                        <NavBar/>

                        <Form/>
                    </div>
                </header>

                <div className="container max-w-7xl mx-auto flex flex-col gap-4 pt-2 px-2 md:px-4">
                    <main className="grow md:grid md:grid-cols-3 gap-4">
                        <MoviesProvider>
                            <MovieList/>

                            <MovieCard/>
                        </MoviesProvider>
                    </main>

                    <Footer/>
                </div>
            </SearchProvider>
        </>
    );
}

export default App;
import {useState} from 'react';

import {MoviesProvider} from "./context/MoviesContext.jsx";

import NavBar from "./components/NavBar.jsx";
import Form from "./components/Form.jsx";
import MovieList from "./components/MovieList.jsx";
import MovieCard from "./components/MovieCard.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    const [query, setQuery] = useState('');
    const [selectedSearchType, setSelectedSearchType] = useState('');
    const [searchYearRange, setSearchYearRange] = useState([]);

    return (
        <>
            <header className="bg-slate-950">
                <div className="container max-w-7xl mx-auto flex flex-col gap-4 dark:text-white p-2 md:p-4">
                    <NavBar/>

                    <Form
                        query={query}
                        setQuery={setQuery}
                        selectedSearchType={selectedSearchType}
                        setSelectedSearchType={setSelectedSearchType}
                        onYearRangeChange={(range) => setSearchYearRange(range)}
                    />
                </div>
            </header>

            <div className="container max-w-7xl mx-auto flex flex-col gap-4 dark:text-white pt-2 px-2 md:px-4">
                <main className="grow md:grid md:grid-cols-3 gap-4">
                    <MoviesProvider
                        query={query}
                        selectedSearchType={selectedSearchType}
                        searchYearRange={searchYearRange}
                    >
                        <MovieList/>

                        <MovieCard/>
                    </MoviesProvider>
                </main>

                <Footer/>
            </div>
        </>
    );
}

export default App;
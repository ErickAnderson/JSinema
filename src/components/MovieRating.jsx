function MovieRating({source, rating}) {
    return (
        <div className="text-center w-full border-r border-gray-500 last:border-0">
            <p className="text-xl font-bold">
                {rating || 'N/A'}
            </p>

            <p className="text-gray-400">
                {source}
            </p>
        </div>
    );
}

export default MovieRating;
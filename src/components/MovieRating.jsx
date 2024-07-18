import PropTypes from "prop-types";

MovieRating.propTypes = {
    source: PropTypes.string.isRequired,
    rating: PropTypes.string
}
function MovieRating({source, rating}) {
    return (
        <div className="text-center w-full border-r border-gray-500 last:border-0">
            <p className="text-lg md:text-xl font-bold">
                {rating || 'N/A'}
            </p>

            <p className="text-sm text-gray-400">
                {source}
            </p>
        </div>
    );
}

export default MovieRating;
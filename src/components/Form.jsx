import SearchType from "./search/SearchType.jsx";
import SearchYearRange from "./search/SearchYearRange.jsx";
import SearchTitle from "./search/SearchTitle.jsx";

function Form() {
    return (
        <form id="search-form"
              className="flex gap-4 md:gap-6 items-center flex-wrap text-sm md:text-base"
              onSubmit={(event) => {
                  event.preventDefault();
              }}>
            >
            <SearchTitle/>

            <SearchYearRange/>

            <SearchType/>
        </form>
    );
}

export default Form;
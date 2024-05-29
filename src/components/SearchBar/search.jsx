import './search.css';

const Search = (props) => {
    const {handleInputChange, handleSearch, searchPlants} = props;

    return (
        <>
        <div class="groove">
            Search for a plant (by ID):
                <input type="text" onChange={handleInputChange}/>
                <button id='buttonmod' onClick={handleSearch}>Search</button>
        </div>
        </>
    )
}

export default Search;
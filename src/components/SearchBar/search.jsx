const Search = (props) => {
    const {handleInputChange, handleSearch, searchPlants} = props;

    return (
        <>
            <div>Search for a plant (by ID):
                <input type="text" onChange={handleInputChange}/>
                <button onClick={handleSearch}>Search</button>
                
            </div>
        </>
    )
}

export default Search;
const Search = (props) => {
    const {handleInputChange, handleSearch, searchPlants} = props;

    return (
        <>
            <div>Search for a plant (by ID):
                <input type="text" onChange={handleInputChange}/>
                <button onClick={handleSearch}>Search</button>
                <div>
                    {searchPlants && searchPlants.map(plant => (
                        <h2>{plant.name}</h2>
                    ))}
                </div>
            </div>
        </>

    )
}

export default Search;
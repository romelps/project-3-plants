const Search = (props) => {

    return (
        <>
        <p>Search for a plant (by ID):
        <input type="text" onChange={props.handleInputChange}/>
        <button onClick={props.handleSearch}>Search</button>
        </p>
        </>

    )
}

export default Search;
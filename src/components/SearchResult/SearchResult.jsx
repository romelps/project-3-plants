
const SearchResult = ({ searchPlants }) => {
    return (
        <div>
            <h2>Search Results</h2>
            <ul>
                <p>Name: {searchPlants.name}</p>
                <p>Size: {searchPlants.size}</p>
                <p>Health: {searchPlants.health}</p>
                <p>Family: {searchPlants.family}</p>
            </ul>
        </div>
    )
}
    export default SearchResult;
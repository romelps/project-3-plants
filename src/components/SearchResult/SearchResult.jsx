
const SearchResult = ({ searchPlants }) => {
    return (
        <div>
            <h2>Search Results</h2>
            <ul>
                {searchPlants.name}<br />
                {searchPlants.size}<br />
                {searchPlants.health}<br />
                {searchPlants.family}<br />
            </ul>
        </div>
    )
}
    export default SearchResult;
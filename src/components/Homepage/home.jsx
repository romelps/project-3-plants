const Home = (props) => {

    const { plant } = props

    return(
        <>
        
        <li>
            <h3>{plant.name}</h3>
        </li>
        {/* <ul>
            {plantList.map((plant, i) =>(
                <li key={i}>
                    { plant.name }
                </li>
            ))}
        </ul>           */}
        </>
    );
};

export default Home;
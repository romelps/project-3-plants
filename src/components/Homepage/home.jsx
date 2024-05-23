const Home = (props) => {

    const { plant } = props

    return(
        <>
        <h1>Welcome to your garden </h1>
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
const Home = (props) => {

    const { plant } = props



    return(
        <>
        
        <li>
            <a href={plant.show}>{plant.name} </a>
            <button onClick={() => props.handleUpdateView(props.selected)}>Repot</button>
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
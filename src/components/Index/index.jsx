import './index.css'
const Index = (props) => {
    const { plant, plantList } = props

    return(
        <>
        
         <main>
            <ul>
            {plantList.map((plant) => (
                <li id={plant._id}>
                    {plant.name}
                    {plant.id}
                    {plant.health}
                    {plant.size}
                </li>
            ))}
            </ul>
            </main>
        
        {/* <li>
            <h3>{plant.name}</h3>
        </li> */}
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

export default Index;
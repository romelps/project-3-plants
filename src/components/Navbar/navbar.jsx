const Nav = (props) => {
    return(
        <>
            <nav>
                <ul>
                    <button><a href='#home'>Garden</a></button>
                    <button onClick={props.handleCreateView}><a href='#create'>
                        {props.isCreateOpen ? 'Dig Up Seed' : 'Plant Seed'}
                    </a></button>
                    <button><a href='#search'>Search</a></button>
                </ul>
            </nav>        
        </>
    )
}
export default Nav;
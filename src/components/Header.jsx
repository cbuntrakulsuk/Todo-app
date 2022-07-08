import ListIcon from '@mui/icons-material/List';

function Header () {
    return (
        <div>
            <header>
                <div className='title-bar'>
                    <div className="brand">
                        <h1>TODO</h1>
                    </div>
                    <div className="icon">
                        <ListIcon fontSize="large"/>
                    </div>
                </div>

            </header>
        </div>
    );
}

export default Header;
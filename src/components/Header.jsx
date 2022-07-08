import './Header.css';
import Search from "./Search";

function Header () {
    return (
        <div>
            <header>
                <h1>TODO</h1>
            </header>
            <div className='search-bar'>
                <Search />
            </div>
        </div>
    );
}

export default Header;
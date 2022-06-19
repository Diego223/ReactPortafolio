import './NavBar.css';

const NavBar = () => 
{
    return (
        <div classname="DivNav">
            <nav id='NavBar'>
                <ul classname="UlNav" id='nav'>
                    <li id='navli1'>
                        <a href="/" id='a1' >Home</a>
                    </li>
                    <li id='navli2'>
                        <a href="/#aboutme" id='a2'>Sobre Mi</a>
                    </li>
                    <li id='navli3'>
                        <a href="/#skills" id='a3'>Habilidades</a>
                    </li>
                    <li id='navli4'>
                        <a href="/#icons" id='a4'>Contact</a>
                    </li>

                </ul>
            </nav>
        </div>
    );
}
export default NavBar;
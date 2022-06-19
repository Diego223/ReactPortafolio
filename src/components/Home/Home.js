import './Home.css'
import img1 from './../../img/Img1.jpg'
import img2 from './../../img/coding.png'
import img3 from './../../img/coding2.png'



const Home = () => 
{
    return (
        <div id='Home'>
            <div id='Container'>
                <h1 id='Hello'>Hola, Mundo.</h1>
                <h1>Bienvenido a mi pagina</h1>
            </div>
            <img id='Img2' src={img2} alt='Img2'/>
            <img id='Img3' src={img3} alt='Img3'/>
        </div>
    );
}
export default Home;
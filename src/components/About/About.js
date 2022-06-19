import './About.css'
import PageHeader from '../PageHeader/PageHeader';
import img4 from './../../img/img3.jpeg'


const About = () => 
{
    return (
        <div id='aboutme'>
            <PageHeader title={'Sobre Mi'} />
            <div id='AboutContainer'>
                <div id='about text'>
                    <h2 id='abouttexth'>Hola soy Diego !</h2>
                    <p id='abouttext'>
                    
                    Soy el maestro del macro en la liga de  leyendas.
                    Fragmento de un escrito con unidad temática, que 
                    queda diferenciado del resto de fragmentos por un 
                    punto y aparte y generalmente también por llevar 
                    letra mayúscula inicial y un espacio en blanco en 
                    el margen izquierdo de alineación del texto principal 
                    de la primera línea.
                    
                    </p>
                </div>
                <div id="foto">
                    <img id='img4' src={img4}></img>
                </div>
            </div>
        </div>
    );
}
export default About;
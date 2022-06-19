import { FaGithub, FaPhone , FaRegEnvelope } from "react-icons/fa";
import './Contact.css';


const HandleURL = (url , text) =>
{
    return event => window.open(url, "_blank");
}


const Contact = () => 
{
    return (
        <div id='icons'>
            <FaGithub color="white" size='30px' style={{padding:'1%' }  } text=''
            onClick={HandleURL('https://github.com/Diego223')}
            />

            <FaPhone color="white" size='30px' style={{padding:'1%' }}           
            />
            <div id='textocontacto1'>+502 4116-0135</div>

            <FaRegEnvelope color="white" size='30px' style={{padding:'1%' }}
                        />
            <div id='textocontacto2'>DiegoCrespo34@gmail.com</div>
        </div>
    );
}
export default Contact;
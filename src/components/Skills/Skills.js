import './Skills.css'
import PageHeader from '../PageHeader/PageHeader';

import img5 from './../../img/img4.png'



const backendskills = 
<ul>
    <li>     Backend </li>
    <li><br/><br/><br/> Python- C# - C++ - Java</li>
</ul>


const frontendskills = 
<ul>
    <li>FrontEnd</li>
    <li><br/><br/><br/>ReactJS - HTML - CSS</li>
</ul>

const otherskills = 
<ul>
    <li>Otherskills</li>
    <li><br/><br/><br/>Git - Json - Unity</li>
</ul>

const totalSkills = [backendskills, frontendskills,otherskills]

const Skills = () => 
{
    return (
        <div id='skills'>
            <PageHeader title={'¡Que hay sobre las habilidades?'} />
            <p id='textoskills'>
                Me gusta mucho aprender nuevas cosas , me considero una
                persona bastante proactiva. Debajo hay algunos lenguajes
                de programacion , frameworks, librerias, 
                con los que he trabajado y me agradan.
                Tengo mejor control y experiencia con unos que con otros.
            </p>
            <img src={img5} id='fotos'></img>

            <div id='SkillsContainer'>
                {totalSkills.map(skills => {
                    return (
                        <div id='lista'>
                            {skills}
                        </div>

                    )
                })}
            
            </div>
        </div>
    );
}
export default Skills;
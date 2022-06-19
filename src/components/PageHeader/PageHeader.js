import './PageHeader.css'

const PageHeader = (props) => 
{
    return (
        <div id='ContainerPage'>
            <hr id='hr' />   
            <h1 id='titlepage'>{props.title}</h1>         
        </div>
    );
}
export default PageHeader;
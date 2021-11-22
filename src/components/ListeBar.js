import { useContext } from 'react/cjs/react.development';
import { MapContext } from '../components/MapContextProvider';
import styled from 'styled-components'

const Container = styled.div` 
    padding: 10px 20px;
	color: dimgray;
    border : 2px solid rgba(47, 107, 49, 0.8);
    border-radius : 10px;
    margin-top : 20px;
    width:340px;
    
`;
const Containers = styled.div` 
    overflow: scroll;
    height: 100vh;
    width : 36%
`;


const Title = styled.h1`
    color: indigo;
    font-size: 32px;
`;

const Paragraphe = styled.p`
  font-style: italic;
	font-size: 16px;
`;

let Span = styled.span`
    font-weight: bold;
`



const ListBar= (props) =>{
    const {location , setLocation , bars , setBars} = useContext(MapContext)

    
    // console.log("liste de bar ",bar);
    if(!bars){
        return null
    }
    console.log("props bar dan liste de bar ", bars);
    return(

        <Containers>
            <h1>Liste des bars </h1>
            {bars.map(bar =>
                <Container>
                    <Title>{bar.name} </Title> 
                    <Paragraphe> {bar.address}</Paragraphe>
                    <Paragraphe> la pinte coute : <Span>{bar.price} </Span> € </Paragraphe>
                </Container> 

            )}
            
        </Containers>
    )
}
export default ListBar
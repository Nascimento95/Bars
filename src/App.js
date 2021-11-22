import { MapContextProvider   }from './components/MapContextProvider';
import Map from './contexts/Map';
import Marker from './components/Marker';
import ListBar from './components/ListeBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
const Container = styled.div` 
  display : flex
`;

const App = () => {

  return (
    <Container>
      <MapContextProvider>
      
        
        <ListBar />
        <Map />
        <Marker />

      </MapContextProvider>
     
    </Container>
  )
}

export default App;

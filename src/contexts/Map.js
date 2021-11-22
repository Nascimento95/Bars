import {React, useEffect} from 'react';
import Marker from '../components/Marker';
import GoogleMapReact from 'google-map-react'
import { useContext } from 'react/cjs/react.development';
import { MapContext } from '../components/MapContextProvider';
import styled from 'styled-components'


const MapContainer = styled.div`
    height: 100vh;
    width: 100%;
`
const Map = () => {
    const {location , setLocation , bars , setBars} = useContext(MapContext)
    
    // console.log(location,bars ,"mes state dans map.js");

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            // console.log(`latitude : ${position.coords.latitude} / longitude : ${position.coords.longitude}`);
            setLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })
          }, (error) => {
            console.error(error);
          });
    }, []);

  return (
	<MapContainer>
        { (location === null ) 
        ? <p>chargement de la localisation ...</p> 
        :  <MapContainer>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={location}
                    defaultZoom={14}
                    >
                    {bars.map(bar =>
                    
                        <Marker
                            value={null}
                            bar={bar}
                            lat={bar.latitude}
                            lng={bar.longitude}
                        /> 
                      
                    )}
                        
                </GoogleMapReact>
            </MapContainer>
        }
			
    </MapContainer>
  );
}

export default Map
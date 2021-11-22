import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

let InfoWindow = styled.div`
    width : 250px;
    background : pink;
    border : 1px solid black;
    border-radius : 20px;
    display:none;

`
let Span = styled.span`
    font-weight: bold;
`


const Marker = (props) =>{
    const [ mouseEnter , setMouseEnter] = useState(false)
    const {bar} = props
    // console.log(props);
    if(!bar){
        return null
    }
    function mouseEnter1 () {
            if(mouseEnter === false){
                setMouseEnter(true)
                 InfoWindow = styled.div`
                width : 300px;
                background : rgba(117, 123, 117, 0.8);
                border : 1px solid black;
                border-radius : 20px;
                display:block;

                `
                
            }
    }
    function mouseLeave () {
        if(mouseEnter === true){
            setMouseEnter(false)
             InfoWindow = styled.div`
            width : 200px;
            background : pink;
            border : 1px solid black;
            display:none;
            `
        }
    }
    
    return (
        <div>
            <img  onMouseEnter={mouseEnter1} onMouseLeave={mouseLeave} src="https://img.icons8.com/material-rounded/24/000000/place-marker.png"/>
            
                <InfoWindow  >
                <h1>{bar.name} </h1> 
                <p> {bar.address}</p>
                <p> la pinte coute : <Span>{bar.price} €</Span> </p>
                </InfoWindow>
                            
        </div>
    )
}

export default Marker
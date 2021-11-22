import { useState, createContext} from "react"
import Bars from "../Bars.json"


const MapContext = createContext({})

    const MapContextProvider = props => {
        const [ location , setLocation] = useState(null)
        const [ bars , setBars] = useState(Bars)
        // console.log("mon state bar",bars);
        const value = {
            location,
            setLocation,
            bars,
            setBars
        }

        return (
            <MapContext.Provider value={value}>
                {props.children}
            </MapContext.Provider>
        )


    }

     
    

export{
    MapContextProvider,
    MapContext
} 
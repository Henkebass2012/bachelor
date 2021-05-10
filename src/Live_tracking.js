import React, {useEffect} from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker, 
  ZoomableGroup
} from "react-simple-maps";
import axios from 'axios'
import { withRouter } from "react-router";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


const MapChart = () => {
    const [long,setLong] = React.useState([])
    const [lat,setLat] = React.useState([])
    const [Waypoint, setWaypoint] = React.useState([])


    function getCoordinatesPython(){
        //console.log("HEY")

        //Her skal du kjøre en axios metode som skal hente data fra APIen din.
        /** 
        axios.get(`127.0.0.3306/unprotected`)
        .then(res => {
            console.log(res.data)
        })
        */ 

        setLat([-68.1193,-47.8825,-70.6693,-74.0721,-74.0721,-78.4678]) //disse skal byttes, men trenger å se dataen fra API for å skjønne hva som må gjøres
        setLong([-16.4897,-15.7942,-33.4489, 4.711,-0.1807,6.8013]) //disse skal byttes, men trenger å se dataen fra API for å skjønne hva som må gjøres

       

        
    }
   
     

    useEffect(() => {    
        // Update the document title using the browser API    
        getCoordinatesPython()  
    });

  return (
      <div style={{ marginLeft:"14%"}}>
          <div style={{width:"100%", height:"30px", borderBottom:"2px solid grey", textAlign:"left", marginLeft:"20px",fontSize:"25px", marginTop:"20px", marginBottom:"-100px"}}>Live Tracking</div>
    <ComposableMap
      projectionConfig={{
       // rotate: [58, 20, 0],
        scale: 150
      }}
    >
        <ZoomableGroup zoom={1}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            .map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            ))
        }
      </Geographies>
      {lat.map((item,index) => (
        <Marker  coordinates={[item,long[index]]}>
          <circle r={2} fill="#F00" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"

            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            
          </text>
        </Marker>
      ))}
      </ZoomableGroup>
    </ComposableMap>
    </div>
  );
};

export default MapChart;

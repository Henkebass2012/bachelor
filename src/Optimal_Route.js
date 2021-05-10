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

//Initialisere kart
const MapChart2 = () => {
    const [long,setLong] = React.useState([])
    const [lat,setLat] = React.useState([])
    const [Waypoint, setWaypoint] = React.useState([])


    function getCoordinatesPython(){
        //console.log("HEY")

        //Her kjører en axios metode henter data fra APIen.
        axios.get(`127.0.0.3306/unprotected`)
        .then(res => {
            console.log(res.data)
        })
         

        setLat(["geometry+d%"]) 
        setLong(["gemoetry+2d%"]) 

        
    }
        

    useEffect(() => {    
        // Update the document title using the browser API    
        getCoordinatesPython()  
    });

  return (
      <div style={{marginLeft:"14%"}}>
          <div style={{width:"100%", height:"30px", borderBottom:"2px solid grey", textAlign:"left", marginLeft:"20px",fontSize:"25px", marginTop:"20px", marginBottom:"-100px"}}>Optimal Shipping Route</div>
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

export default MapChart2;

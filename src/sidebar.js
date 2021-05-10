import React from "react";
import {withRouter} from 'react-router-dom'
import Maersk from "./maersk3.png"
import './navbar.css';

function sidebar(props) {
return(

    <div className={'nav-menu active'}>
        <div
        style={{height:"100vh",alignItems:"center", width:"100%", display:"table-cell", backgroundColor:"black"}}>

            <div>
                <div class="headerSidebar" style={{marginTop:"20px",borderBottom:"2px solid grey",fontSize:"17px", marginBottom:"20px", display:"flex", justifyContent:"center", color:"#fff"}}>
                 Shipping Route Model
                </div>
            </div>

            <div style={{display:"block"}}>
                <div style={{justifyContent:"left",display:"inline-block", display:"flex", textAlign:"left", padding:"30px 0px 0px 15px"}}>
                    <div onClick={()=> {props.history.push('/LiveBoats');window.location.replace("/LiveBoats")}} style={{display:"inline-block", display:"flex", cursor:"pointer"}}>
                        <i style={{transform:"scale(1)", color:"white"}} class="ship icon"></i> 
                        <span style={{marginTop:"-10px", color:"#fff", padding:"10px", fontSize:"14px"}}>Live Boat Tracking</span>
                    </div>
                </div>

                <div style={{justifyContent:"left",display:"inline-block", display:"flex", textAlign:"left", padding:"30px 0px 0px 15px"}}>
                    <div onClick={()=> {props.history.push('/OptimalRoute');window.location.replace("/OptimalRoute")}} style={{display:"inline-block", display:"flex", cursor:"pointer"}}>
                        <i style={{transform:"scale(1)", color:"white"}} class="ship icon"></i> 
                        <span style={{marginTop:"-10px", color:"#fff", padding:"10px", fontSize:"14px"}}>Optimal Route</span>
                    </div>
                </div>

            </div>

            <div>
                <picture>
                    <img style={{height:"90px", width:"100%", marginTop:"400px"}} src={Maersk} alt="ImageMaersk"></img>
                </picture>
            </div>

        </div>
    </div>



   

)
}

export default withRouter(sidebar);

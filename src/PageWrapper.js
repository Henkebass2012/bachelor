import React from "react";
import {withRouter} from 'react-router-dom'
import './App.css'

function PageWrapper(props){
    return(
        <div className="page-wrapper">
            {props.children}
        </div>
    )
}

export default withRouter(PageWrapper) 
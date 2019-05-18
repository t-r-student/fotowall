import React from 'react';
import Photo from './Photo';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const btnStyle = {
        margin: "20px auto",
        display: "table",
        padding: "40px",
        fontSize: "20px"
}

const photoGrid = {
    maxWidth: "1000px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap"    
}

function Photowall(props){
    console.log('props from Photowall', props);
    return(
        <div>
            <div className="row">
                <div className="col s5"></div>
                <div className="col s2">
                    <Link style={btnStyle} to="/AddPhoto"> Click me  </Link>
                </div>
                <div className="col s5"></div>
            </div>
            <div className="row">
                <div className="col s12" style={photoGrid}>
                    {props.posts
                    // .sort(function(x,y){
                    //     return y.id - x.id
                    // })
                    .map((post, index)=>
                        <Photo key={index} post={post} {...props} index={index}/>
                    )}
                </div>
            </div>
        </div>
    )
}

Photowall.propTypes = {
    posts : PropTypes.array.isRequired,
}

export default Photowall;
import React from 'react';
import Photo from './Photo';
import PropTypes from "prop-types";

const btnStyle = {
        margin: "20px auto",
        display: "table",
        padding: "40px",
        fontSize: "32px"
        // background: "url('https://image.flaticon.com/icons/svg/16/16909.svg')",
        // backgroundSize: "contain",
        // border: "none"
}

const photoGrid = {
    maxWidth: "1000px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap"    
}

function Photowall(props){
    return(
        <div>
        <button className="btn btn-primary" style={btnStyle} type="submit" onClick={props.onNavigate} > + </button>

        <div className="p" style={photoGrid}>
            {props.posts.map(function(post, index){
                return <div className="col">
                    <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>
                    </div>
            })}
        </div>
        </div>
    )
}

Photowall.propTypes = {
    posts : PropTypes.array.isRequired,
    onRemovePhoto : PropTypes.func.isRequired

}

export default Photowall;
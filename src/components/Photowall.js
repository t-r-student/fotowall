import React from 'react';
import Photo from './Photo';
import PropTypes from "prop-types";

function Photowall(props){
    return(
        <div className="p">
            {props.posts.map(function(post, index){
                return <div className="col">
                    <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>
                    </div>
            })}
        </div>
    )
}

Photowall.propTypes = {
    posts : PropTypes.array.isRequired,
    onRemovePhoto : PropTypes.func.isRequired

}

export default Photowall;
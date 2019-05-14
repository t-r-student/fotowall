import React from 'react';
import PropTypes from "prop-types";

function Photo(props){
    console.log(props)
    const post = props.post;
    return(
         <figure className="figure">
            <img className="photo" src={post.imageLink} alt={post.description}/>    
            <figcaption> <p> {post.description} </p> </figcaption>
            <button onClick={()=> {
                props.onRemovePhoto(post)
            } }> remove </button>
        </figure>
    )
}

Photo.propTypes = {
    post : PropTypes.object.isRequired,
    onRemovePhoto : PropTypes.func.isRequired
}

export default Photo;
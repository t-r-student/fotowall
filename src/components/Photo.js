import React from 'react';
import PropTypes from "prop-types";

const figure = {
    flexBasis: "calc(33.333% - 4rem)",
    border: "4px solid grey",
    padding: "2rem",
    flexGrow: "1",
    margin: "0 2rem 2rem 2rem",
    fontSize: "14px"
}

function Photo(props){
    console.log(props)
    const post = props.post;
    return(
         <figure style={figure}>
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
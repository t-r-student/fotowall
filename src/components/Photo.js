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
    const { post, removePost } = props;
    return(
         <figure style={figure}>
            <img className="photo" src={post.imageLink} alt={post.description}/>    
            <figcaption> <p> {post.description} </p> </figcaption>
            <button onClick={function(){
                return removePost(props.index)
            } }> Remove </button>
        </figure>
    )
}


Photo.propTypes = {
    post : PropTypes.object.isRequired,
}

export default Photo;
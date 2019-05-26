import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const figure = {
    flexBasis: "calc(33.333% - 4rem)",
    border: "4px solid grey",
    padding: "2rem",
    flexGrow: "1",
    margin: "0 2rem 2rem 2rem",
    fontSize: "14px"
}

function Photo(props){
    const { post, removePost } = props;
    // debugger;
    return(
         <figure className="figure">
             <Link to={`/single/${post.id}`} > <img className="photo" src={post.imageLink} alt={post.description}/> </Link>
                
            <figcaption> <p> {post.description} </p> </figcaption>
            <div className="button-container">
                <button className="button-remove" onClick={()=> {
                    removePost(props.key)
                    props.history.push('/')
                } }> Remove </button>
                <Link className="button" to={`/single/${post.id}`}>
                <div className="comment-count">
                    <div className="speech-bubble"> </div>
                    {props.comments[post.id] ? props.comments[post.id].length : 0 }
                </div>


                </Link> 
            </div>
        </figure>
    )
}


Photo.propTypes = {
    post : PropTypes.object.isRequired,
}

export default Photo;
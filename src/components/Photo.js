import React from 'react';

function Photo(props){
    console.log(props)
    const post = props.post;
    return(
         <figure className="figure">
            <img className="photo" src={post.imageLink} alt={post.description}/>    
            <figcaption> <p> {post.description} </p> </figcaption>
            <button> remove </button>
        </figure>
    )
}

export default Photo;
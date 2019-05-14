import React from 'react';
import Photo from './Photo';

function Photowall(props){
    return(
        <div className="p">
            {props.posts.map(function(post, index){
                return <div className="col">
                    <Photo key={index} post={post}/>
                    </div>
            })}
        </div>
    )

}

export default Photowall;
import React from 'react';
import Photo from './Photo.js';
import Comments from './Comments';

class Single extends React.Component{
    render(){
        // debugger;
        const {match, posts} = this.props;
        const id = Number(match.params.id);
        const post = posts.find((post)=> post.id === id);
        const comments = this.props.comments[match.params.id] || []; // data from the store
        const index = this.props.posts.findIndex((post)=>post.id ===id)
    return(
        
        <div className="single-photo">
            <Photo key={index} post={post} {...this.props}  />
            <Comments addComment={this.props.addComment} comments={comments} id={id}/> 
        </div>
    )
 
    }
}



export default Single;
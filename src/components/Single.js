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
        const index = this.props.posts.findIndex((post)=>post.id===id)
    return(
        
        <div className="single-photo">
            <Photo post={post}
             {...this.props}
             index={index}
             />
            <Comments
            addComment={this.props.addComment} // action 
            comments={comments} id={id}/> 
        </div>
    )
 
    }
}



export default Single;
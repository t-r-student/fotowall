import React from 'react';

class Comments extends React.Component{
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault()
        const comment = event.target.elements.comment.value;
        this.props.addComment(comment, this.props.id); // here we are emitting an action
        event.target.elements.comment.value='';
        
    }

    
    render(){
        
        return(
           
            <div className="comment">
                {
                    this.props.comments.map((comment, index)=>{
                        return (
                            <p key={index}>{comment}</p>
                        )
                    })
                }
                    
                
                <form className="comment-from" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="comment" name="comment"/>
                    {/* <input type="text" placeholder="link" name="link"/> */}
                    <input type="submit" />
                </form> 
            </div>
        )
    }
    
}

export default Comments;
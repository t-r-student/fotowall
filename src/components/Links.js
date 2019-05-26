import React from 'react';

class Links extends React.Component{
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        const link = event.target.elements.link.value;
        this.props.addLink(link, this.props.id);
    }

    
    render(){
        console.log(this.props)
        debugger;
        return(
            
            <div>
                {
                    this.props.links.map((link, index)=>{
                        return (
                            <div>
                                <h4 key={index}>{link}</h4>
                            </div>
                        )
                    })
                }
                <form className="comment-from" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="link" name="link"/>
                    <input type="submit" hidden/>
                    

                </form>
            </div>
        )
    }
}

export default Links;
import React from 'react';

const styles = {
    form : {
        background : "white",
        margin: "0 auto",
        maxWidth: "360px",
        padding: "45px",
        textAlign: "center"
    },
    formInput : {
        background : "#f2f2f2",
        width: "100%",
        border: "none",
        padding: "15px",
        boxSizing: "border-box",
        fontSize: "14px",
        margin: "0 0 15px"
    },
    button : {
        width : "100%",
        border: "none",
        background: "#065784",
        padding: "15px",
        color: "white",
        fontSize: "14px",
        cursor: "pointer"
    }

}

class AddPhoto extends React.Component{
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const imageLink  = event.target.elements.link.value;
        const description  = event.target.elements.description.value;
        const post = {
            id : Number(new Date()),
            description : description,
            imageLink : imageLink
        }
        if (imageLink && description) {
            this.props.addPost(post)
            this.props.onHistory.push('/')
        }
    }

    render(){
        const {form : form, formInput : formInput, button : button} = styles;
        
     return(
       <div className="form">
           <h1>Photowall</h1>
         <form onSubmit={this.handleSubmit}>
             
           <div className="row" style={form}>
              <div className="col" style={formInput}>
              
                <input type="text" className="form-control"  placeholder="Link"
                       name="link"/>
              </div>
           </div>   
           <div className="row" style={form}>
              <div className="col" style={formInput}>

                <input type="text" className="form-control" placeholder="Description"
                       name="description" />

              </div>
           </div>  
           <div className="row" style={form}>
                <button style={button}> Post </button>
           </div>
         </form>
       </div>    
        )
    }
}

export default AddPhoto;
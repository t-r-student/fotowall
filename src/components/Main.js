import React from 'react';
import Title from './Title';
import Photowall from './Photowall';
import { Route } from 'react-router-dom';
import AddPhoto from './AddPhoto';
import Single from './Single';
import Comments from './Comments.js';





class Main extends React.Component{
    constructor(){
        super();
    }

    render(){
    return (

        <div>
            <Route exact path='/' render={() => (
                <div>
                <Title title = {'Fotowall'}/>
                    <div className="photoGrid">
                        <div className="row">

                            <Photowall {...this.props}/> 
                            
                        </div>
                    </div>
                </div>
            )}/>
                
            {/* <Route path="/AddPhoto"render={() =>(<div><AddPhoto/></div> )} */}

             <Route path="/AddPhoto" render = { (params) => ( //{params} as a property of an object
                <AddPhoto {...this.props} onHistory={params.history}/>
            )} />
            {/* <Route path="/single/:id" render={(params) => (
                <Single {...this.props} {...params} />
            ) }/> */}
                    
        </div>
        )
    }
}

export default Main;
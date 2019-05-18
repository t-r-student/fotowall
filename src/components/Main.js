import React from 'react';
import Title from './Title';
import Photowall from './Photowall';
import { Route } from 'react-router-dom';
import { removePost } from '../redux/actions';





class Main extends React.Component{
    constructor(){
        super();
    }

    render(){
        console.log("props from Main", this.props);
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
                
            {/* <Route path="/AddPhoto"render={() =>(<div><AddPhoto/></div> )}*/}
            {/* <Route path="/AddPhoto" render = { ({history}) => (
                <AddPhoto onAddPhoto={(addedPost) => {
                    this.addPhoto(addedPost)
                    history.push('/')    
                }}/>
            )} /> */}
                    
        </div>
        )
    }
}

export default Main;
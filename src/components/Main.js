import React from 'react';
import Title from './Title';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';
import { Route } from 'react-router-dom';




class Main extends React.Component{
    constructor(){
        super()
        this.state= {
            posts : [{
                id: 0,
                description: "beautifull landscape",
                imageLink: "http://costaszissis.com/wp-content/uploads/2015/06/nature_05-400x400.jpg"
            },
            {
                id: 1,
                description: "sport",
                imageLink: "http://media.ussportscamps.com/media/images/basketball/nike/_400x400_crop_top-center_75/nike_thumbnail_400x400_1.jpg"
            }],
        }
        this.removePhoto = this.removePhoto.bind(this);
    }

    addPhoto(postSubmited){
        this.setState(state => ({
            state : state.posts.concat([postSubmited])
        }))
    }
    

    removePhoto(postRemoved){
        console.log(postRemoved.description)
        this.setState((prevState)=> ({
            posts: prevState.posts.filter(post => post !== postRemoved)
        }))
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevState.posts);
        console.log(this.state);
    }

    render(){
        console.log(this.state.posts)
        return <div>
                <Route exact path='/' render={() => (
                    <div>
                    <Title title = {'Fotowall'}/>
                        <div className="photoGrid">
                            <div className="row">
                        <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate = {this.navigate} />
                    </div>
                </div>
                </div>
                )}/>
                    
                {/* <Route path="/AddPhoto"render={() =>(<div><AddPhoto/></div> )}*/}

                <Route path="/AddPhoto" render = { ({history}) => (
                    <AddPhoto onAddPhoto={(addedPost) => {
                        this.addPhoto(addedPost)
                        history.push('/')    
                    }}/>
                )} />
                    
            </div>
            
    }
}

export default Main;
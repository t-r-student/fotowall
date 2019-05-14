import React from 'react';
import Title from './Title';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';



class Main extends React.Component{
    constructor(){
        super()
        this.state= {
            posts : [{
                id: "0",
                description: "beautifull landscape",
                imageLink: "http://costaszissis.com/wp-content/uploads/2015/06/nature_05-400x400.jpg"
            },
            {
                id: "1",
                description: "sport",
                imageLink: "http://media.ussportscamps.com/media/images/basketball/nike/_400x400_crop_top-center_75/nike_thumbnail_400x400_1.jpg"
            }],
            screen : 'photos'
        }
        this.removePhoto = this.removePhoto.bind(this);
        console.log('constructor');
        this.navigate = this.navigate.bind(this);
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

    navigate(){
        this.setState({
            screen : 'addPhoto'
        })    
    }

    render(){
        console.log('render');
        return <div>
            {
                this.state.screen === 'photos' && (
                    <div>
                        <Title title = {'Fotowall'}/>
                            <div className="photoGrid">
                                <div className="row">
                            <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate = {this.navigate} />
                        </div>
                    </div>
                    </div>

                )
            }

            {
                this.state.screen === 'addPhoto' && (
                    <div>
                        <AddPhoto/>
                    </div>
                )
            }
            </div>
            
    }
}

export default Main;
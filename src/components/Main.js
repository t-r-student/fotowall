import React from 'react';
import Title from './Title';
import Photowall from './Photowall';



class Main extends React.Component{
    constructor(){
        super()
        this.state= {
            posts : []
        }
        this.removePhoto = this.removePhoto.bind(this);
    }


    removePhoto(postRemoved){
        console.log(postRemoved.description)
        this.setState((prevState)=> ({
            posts: prevState.posts.filter(post => post !== postRemoved)
        }))
    }

    componentDidMount(){
        const data = SimulateFetchFromDB();
        this.setState({
            posts : data
        })
    }

    render(){
        return <div>
            <Title title = {'Fotowall'}/>
                <div className="photoGrid">
                    <div className="row">
                        <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto}/>
                    </div>
                </div>
            </div>
    }
}

function SimulateFetchFromDB(){
    return [{
        id: "0",
        description: "beautifull landscape",
        imageLink: "http://costaszissis.com/wp-content/uploads/2015/06/nature_05-400x400.jpg"
    },
    {
        id: "1",
        description: "sport",
        imageLink: "http://media.ussportscamps.com/media/images/basketball/nike/_400x400_crop_top-center_75/nike_thumbnail_400x400_1.jpg"
    }]
}

export default Main;
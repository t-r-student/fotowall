import React from 'react';
import Title from './Title';
import Photowall from './Photowall';

const posts = [{
    id: "0",
    description: "beautifull landscape",
    imageLink: "http://costaszissis.com/wp-content/uploads/2015/06/nature_05-400x400.jpg"
},
{
    id: "1",
    description: "sport",
    imageLink: "http://media.ussportscamps.com/media/images/basketball/nike/_400x400_crop_top-center_75/nike_thumbnail_400x400_1.jpg"
},


]

class Main extends React.Component{
    render(){
        return <div>
            <Title title = {'Fotowall'}/>
                <div className="photoGrid">
                    <div className="row">
                        <Photowall posts={posts}/>
                    </div>
                </div>
            </div>
    }
}

export default Main;
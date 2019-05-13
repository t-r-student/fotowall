import React from 'react';

class List extends React.Component{
    render(){
        return <ol>
            {this.props.tasks.map(function(task, index){
                 return <li key={index}>
                    {task}
                 </li>   
            })}
        </ol>
    }
}

export default List;
import {database} from '../database/config';

export function startAddingPost(post){
    return(dispatch) => {
        return database.ref('posts').update({[post.id] : post}).then(()=>{
            dispatch(addPost(post))
        }).catch((error)=>{
            console.log(error)
        })
    }
}


// ACTIONS
// remove action

export function removePost(index){
    return {
        type: "REMOVE_POST",
        index: index
    }
}

export function addPost(post){
    
    return {
        type : "ADD_POST",
        post : post // post - since the same name
    }
}

// export function addCommentLinkAction(comment, link, postId){ // ADD_COMMENT action
//     // debugger;
//      return {
//         type : "ADD_COMMENT_AND_LINK",
//         commentLink : {
//             comment: comment,
//             link: link
//         },
//         postId: postId
//     }
// }
export function addComment(comment, postId){ // ADD_COMMENT action
    // debugger;
     return {
        type : "ADD_COMMENT_AND_LINK",
        comment : comment,
        postId: postId  
    }
}


//adding post


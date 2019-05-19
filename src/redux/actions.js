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


//adding post
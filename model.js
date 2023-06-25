
const Tweeter = function() {
    let _posts = []

    let postIdCounter = 0
    let commentIdCounter = 0
    
    const getPosts = function() {
        return _posts
    }

    const addPost = function(postText) {
        let _post = {
            text: "",
            id: "",
            comments: []
        }
        if (postText == "") {
            console.log ("there is nothing to post...")
            return
        }
        postIdCounter ++
        _post.text = postText
        _post.id = "p" + postIdCounter
        _posts.push(_post)
    }

    const _findPost = function(postId){
        for (postInd in _posts){
            if(_posts[postInd]['id'] == postId) return postInd
        }
        return alert(`${postId} not found`)
    }

    const _findComment = function(postId, commentId) {
        let postInd = _findPost(postId)
        for (commentInd in _posts[postInd]['comments']) {
            if (_posts[postInd]['comments'][commentInd]['id'] == commentId) return commentInd
        }
        return alert(`comment ${commentId} in ${postId} not found`)
    }

    const removePost = function(postId) {
        _posts.splice(_findPost(postId), 1)
    }


    const addComment = function(commentText, postID) {
        if (commentText == "") {
            console.log ("there is nothing...")
            return
        }
        commentIdCounter ++
        let _comment = {
            id: "c" + commentIdCounter,
            text: commentText
        }
        _posts[_findPost(postID)]['comments'].push(_comment)
    }

    const removeComment = function(postId, commentId) {
        let commentInd = _findComment(postId,commentId)
        if (commentInd){
            _posts[_findPost(postId)]['comments'].splice(commentInd,1)
        }
    }



    return {
        addPost: addPost,
        removePost: removePost,
        getPosts: getPosts,
        addComment: addComment,
        removeComment: removeComment
    }

}


const tweeter = Tweeter()

tweeter.addPost("First post!")
tweeter.addPost("Aw man, I wanted to be first")

tweeter.addComment("First comment on first post!", "p1")
tweeter.addComment("Second comment on first post!!", "p1")
tweeter.addComment("Third comment on first post!!!", "p1")

tweeter.addComment("Don't wory second poster, you'll be first one day.", "p2")
tweeter.addComment("Yeah, believe in yourself!", "p2")
tweeter.addComment("Haha second place what a joke.", "p2")




// [
//     {
//         text: "First post!",
//         id: "p1",
//         comments: [
//             { id: "c1", text: "First comment on first post!" },
//             { id: "c2", text: "Second comment on first post!!" },
//             { id: "c3", text: "Third comment on first post!!!" }
//         ]
//     },
//     {
//         text: "Aw man, I wanted to be first",
//         id: "p2",
//         comments: [
//             { id: "c4", text: "Don't wory second poster, you'll be first one day." },
//             { id: "c5", text: "Yeah, believe in yourself!" },
//             { id: "c6", text: "Haha second place what a joke." }
//         ]
//     }
// ]
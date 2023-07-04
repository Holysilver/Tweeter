
const Tweeter = function() {
    const _posts = []

    let postIdCounter = 0
    let commentIdCounter = 0
    
    const getPosts = function() {
        return [..._posts]
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

    // 1st version of find function. Better to find in any array. 
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
        let postInd = _findPost(postId)
        if (postInd) {
            _posts.splice(postInd, 1)
        }
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
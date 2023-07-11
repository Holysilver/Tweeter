const Renderer = function() {

    function renderPosts(posts) {
        const _posts = $("#posts");
        _posts.empty();

        for(const post of posts){
            const newPost = $(`<div class="post" data-id="${post.id}">${post.text}<button id="deletePost" class="delete">X</button>`);
            _posts.append(newPost);
            const _currentPost = $(`[data-id="${post.id}"]`)
            _currentPost.append(`<div><input type="text" placeholder="Put your comment here" id="commentText"><button id="addComment${post.id}" class="add">Add Comment</button></div>`)
            _currentPost.append(`<div class="comments" id="c${post.id}">`);
            for (const comment of post.comments){
                const newComment = $(`<p data-id="${comment.id}">${comment.text}<button id="deleteComment" class="delete">X</button></p>`);
                $(`#c${post.id}`).append(newComment);
            }
        }
    }

    return{
        renderPosts,
    }
}


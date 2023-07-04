const Renderer = function() {

    function renderPosts(posts) {
        const _posts = $("#posts");
        _posts.empty();

        for(const post of posts){
            const newPost = $(`<div class="post-text" data-id="${post.id}">${post.text}<span></span><button id="deletePost" class="delete">X</button></div>`);
            _posts.append(newPost);
            _posts.append(`<div class="comments" id="c${post.id}">`);
            for (const comment of post.comments){
                const newComment = $(`<p data-id="${comment.id}">${comment.text}</p>`);
                $(`#c${post.id}`).append(newComment);
            }
        }
    }

    return{
        renderPosts,
    }
}


// <div class="post-text" data-id="p1">First post!</div>
// <div class="comments">
//     <p data-id="c1">First comment on first post!</p>
//     <p data-id="c2">Second comment on first post!!</p>
//     <p data-id="c3">Third comment on first post!!!</p>
// </div>
// <div class="post-text" data-id="p2">Aw man, I wanted to be first</div>
// <div class="comments">
//     <p data-id="c4">Don't wory second poster, you'll be first one day.</p>
//     <p data-id="c5">Yeah, believe in yourself!</p>
//     <p data-id="c6">Haha second place what a joke.</p>
// </div>
// </div>

// let _post = {
//     text: "",
//     id: "",
//     comments: []
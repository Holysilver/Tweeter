const tweeter2 = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

const post =  function() {
    const text = $("#input").val()
    $("#input").val("")
    tweeter.addPost(text)
    renderer.renderPosts(tweeter.getPosts())
}

$("body").on("click","#deletePost", function() {
    const id = $(this).closest(".post").data().id
    $(`#${id}`).remove()
    tweeter.removePost(id)
    renderer.renderPosts(tweeter.getPosts())
})

$("body").on("click","#deleteComment", function() {
    const id = $(this).closest("p").data().id
    $(`#${id}`).remove()
    const postID = $(this).closest(".post").data().id
    tweeter.removeComment(postID, id)
    renderer.renderPosts(tweeter.getPosts())
})

$("body").on("click", ".add", function() {
    const text = $(this).closest(".post").find("input").val()
    $(this).closest(".post").find("input").val("")
    const postID = $(this).closest(".post").data().id
    tweeter.addComment(text, postID)
    renderer.renderPosts(tweeter.getPosts())
})
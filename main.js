const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

const post =  function() {
    const text = $("#input").val()
    $("#input").val("")
    tweeter.addPost(text)
    renderer.renderPosts(tweeter.getPosts())
}

$(".delete").on("click", function() {
    const id = $(this).data().id
    console.log(id)
    $(`#${id}`).remove()
    tweeter.removePost(id)
    renderer.renderPosts(tweeter.getPosts())
})
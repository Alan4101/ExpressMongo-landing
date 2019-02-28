$(document).ready(function () {
    console.log("method script run");
    function GetPosts() {
        $.ajax({
            url: 'api/posts',
            type: 'GET',
            contentType: 'application/json',
            success: function (posts) {
                $.each(posts, function (i, posts) {
                    console.log(posts);
                });
                console.log("posts send");
            }
        })
    }
    GetPosts();
    // function createMsg(name, email, title, commetn){
    //     $.ajax({
    //         url: '',
    //         type: 'POST',
    //         contentType: 'application/json',
    //         data: JSON.stringify({
    //             name: name,
    //             email: email,
    //             title: title,
    //             txt_comment: commetn
    //         }),
    //         success: function () {
    //
    //         }
    //     })
    // }

});
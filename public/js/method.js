$(document).ready(function () {
    console.log("method-script run..");

    function GetPosts() {
        $.ajax({
            url: '/api/post',
            type: 'GET',
            contentType: 'application/json',
            success: function (post) {
                var posts= '';
                $.each(post, function (i, post) {
                   posts+=insert(post) ;
                });
                $('.swiper-wrapper').append(posts);
                var swiper_phrases =  new Swiper('.sw-c', {
                    pagination: {
                        el: '.swiper-pagination',
                    },
                });
                console.log("posts send");
            }
        })
    }
    function createMsg(name, email, title, commetn){
        $.ajax({
            url: 'api/msg/',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                name: name,
                email: email,
                title: title,
                txt_comment: commetn
            }),
            success: function () {
                reset();
            }
        })
    }

    GetPosts();

    var insert = function (obj){
        return'<div class="swiper-slide item-phrase flex-container-0"><p>'+obj.text+'</p><p>'+obj.author+'</p></div>';
    };
    function reset() {
        var form = document.forms["send"];
        form.reset();
    }
    $('form[name="send"]').submit(function (e) {
        e.preventDefault();
        var name = this.elements['name'].value;
        var email = this.elements['email'].value;
        var title = this.elements['title'].value;
        var text = this.elements['txt_comment'].value;

        createMsg(name, email, title, text);
    })

});
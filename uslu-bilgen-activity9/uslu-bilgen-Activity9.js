
$(document).ready(function() {
    // preload images
    $("#image_list a").each(function() {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });
    
    $("#image_list a").click(function(evt) {
        evt.preventDefault();  

        var newImageUrl = $(this).attr('href'); 
        var newCaption = $(this).attr('title'); 

        $('#image').fadeOut(1000, function() {
            $('#image').attr('src', newImageUrl).fadeIn(1000);
            $('#caption').text(newCaption).fadeIn(1000);
        });
    }); 

    $("li:first-child a").focus();
});

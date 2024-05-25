$(document).ready(function() {
    function createBubble(user) {
        var bubble = $('<div class="bubble"></div>');
        bubble.append('<img src="' + user.picture.medium + '" alt="User Picture">');
        bubble.append('<h3>' + user.name.first + ' ' + user.name.last + '</h3>');
        bubble.append('<p>' + user.email + '</p>');
        bubble.append('<p>' + user.location.city + '</p>');
        return bubble;
    }

    // Random User API'den 100 kullanıcıyı çekme
    $.ajax({
        url: 'https://randomuser.me/api/?results=100',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            var users = data.results;
            var body = $('body');
            users.forEach(function(user) {
                var bubble = createBubble(user);
                body.append(bubble);
            });
        },
        error: function(error) {
            console.error('cant fetch data:', error);
        }
    });
});

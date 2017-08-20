$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/boss-danuphan.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      var badges = $('#badges');
      if(response.courses.completed){
        $.each( response.courses.completed, function(key, item){
            console.log($(this));
            badges.append(
                '<div class="course">' +
                    '<h3>' + item.title + '</h3>' +
                    '<img src="'+item.badge+'">' +
                    '<a href="'+item.url+'" target="_blank" class=" btn btn-primary">See course</a>' +
                '</div>'
            );
        });
        console.log(response.courses.completed);
      }
    //$(this).appendTo($(this).parent());

    }
  });
});

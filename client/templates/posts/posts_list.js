Template.postsList.helpers({

    posts: function() {
        return Posts.find({}, {sort: {submitted: -1}});
    }

});    //   ***END ==> 'Template.postsList.helpers'


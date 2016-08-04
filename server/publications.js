Meteor.publish('posts', function() {

    return Posts.find();

});   //   ***END ==> 'Meteor.publish('posts'....''

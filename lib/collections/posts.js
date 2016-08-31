Posts = new Mongo.Collection('posts');

Meteor.methods({
    postInsert: function(postAttributes) {
        check(Meteor.userId(), String);
        check(postAttributes, {
            title: String,
            url: String
        });  //  check(postAttributes

        if (Meteor.isServer) { 
            postAttributes.title += "(server)"; 
            // wait for 5 seconds 
            Meteor._sleepForMs(5000);
        } else {
            postAttributes.title += "(client)";
        }

        // Check for post w duplicate url before db insert
        var postWithSameLink = Posts.findOne({url: postAttributes.url}); 
            if (postWithSameLink) {
                return {
                    postExists: true,
                    _id: postWithSameLink._id
                } 
            }  //  if (postWithSameLink) 

        var user = Meteor.user();
        var post = _.extend(postAttributes, {
            userId: user._id, 
            author: user.username, 
            submitted: new Date()
        });  //  var post = _.extend(postAttributes,

        var postId = Posts.insert(post);

        return {
            _id: postId
        }; 

    }  //  postInsert: function(postAttributes)

});  // Meteor.methods

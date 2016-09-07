Posts = new Mongo.Collection('posts');

Posts.allow({
    update: function(userId, post) { return ownsDocument(userId, post); },
    remove: function(userId, post) { return ownsDocument(userId, post); }
});

Posts.deny({
    update: function(userId, post, fieldNames) {
        // Deny editing of  any fields besides url & title. This is done by returnign a sub-array containing the fields that are not url or title. That array should be empty and its length should be 0. If someone is trying anything funky, that array’s length will be 1 or more, and the callback will return true (thus denying the update).
        return (_.without(fieldNames, 'url', 'title').length > 0);
    }
});

Meteor.methods({
    postInsert: function(postAttributes) {
        check(Meteor.userId(), String);

        check(postAttributes, {
            title: String,
            url: String
        });

        // Check for post w duplicate url before db insert
        var postWithSameLink = Posts.findOne({url: postAttributes.url}); 

            if (postWithSameLink) {
                return {
                    postExists: true,
                    _id: postWithSameLink._id
                } 
            }

        var user = Meteor.user();

        var post = _.extend(postAttributes, {
            userId: user._id, 
            author: user.username, 
            submitted: new Date()
        });

        var postId = Posts.insert(post);

        return {
            _id: postId
        }; 

    }  /* postInsert: function(postAttributes) */

});  /* Meteor.methods */

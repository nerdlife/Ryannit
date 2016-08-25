Posts = new Mongo.Collection('posts');

Posts.allow({
    insert: function(userId, doc) {
        // can only submit new post if user has a userID (aka is logged in)
        return !! userId;
    }
});

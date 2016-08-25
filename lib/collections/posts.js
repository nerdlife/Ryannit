Posts = new Mongo.Collection('posts');

Posts.allow({
    insert: function(userId, doc) {
        // can only submit new post if user is logged in
        return !! userId;
    }
});

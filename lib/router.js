Router.configure({
    layoutTemplate: 'layout',
    // Still  Loading Beachball
    loadingTemplate: 'loading',
    // 404 Page
    notFoundTemplate: 'notFound',
    waitOn: function() { return Meteor.subscribe('posts'); },
});

Router.route('/', { name: 'postsList'});
    // Passes the id to router
Router.route('/posts/:_id', {
    name: 'postPage',
    data: function() { return Posts.findOne(this.params._id); }
});

// Creatign new post
Router.route('/submit', {name: 'postSubmit'});

// Displays 404 on incorrect typeins by user (ex: a Post Page where the  id # doesnt exist)
Router.onBeforeAction('dataNotFound', {only: 'postPage'});


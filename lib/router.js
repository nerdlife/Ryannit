Router.configure({
    layoutTemplate: 'layout',
    // Loading Beachball Template
    loadingTemplate: 'loading',
    // 404 Template
    notFoundTemplate: 'notFound',
    waitOn: function() { return Meteor.subscribe('posts'); },
});

// INDEX PAGE
Router.route('/', { name: 'postsList'});

// INDIVIDUAL POST
Router.route('/posts/:_id', {
    name: 'postPage',
    data: function() { return Posts.findOne(this.params._id); }
});

// EDIT POST
Router.route('/posts/:_id/edit', {
    name: 'postEdit',
    data: function() { return Posts.findOne(this.params._id); }
});

// NEW POST
Router.route('/submit', {name: 'postSubmit'});

// USER LOGGED IN?
var requireLogin = function() { 
    if (! Meteor.user()) {

        if (Meteor.loggingIn()) { 
            this.render(this.loadingTemplate);
        }
        else { 
            this.render('accessDenied');
        }

    }   /*  if (! Meteor.user()) { */

    else {
        this.next(); 
    }

}  /*   var requireLogin = function() {    */


// 404 page
Router.onBeforeAction('dataNotFound', {only: 'postPage'});
// Must be logged in to submit new 
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});


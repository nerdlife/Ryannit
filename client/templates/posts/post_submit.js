Template.postSubmit.onCreated(function() { 
    // initializes the Session object postSubmitErrors, which will contain any error messages user comes across
    Session.set('postSubmitErrors', {});
});  /* Template.postSubmit.onCreated */



Template.postSubmit.helpers({ 
    // Returns error message
    errorMessage: function(field) {
        return Session.get('postSubmitErrors')[field]; 
    },
    errorClass: function (field) {
    // Check for presence of error message. Returns 'has-error' if so
    return !!Session.get('postSubmitErrors')[field] ? 'has-error' : '' ;
    } 
});  /* Template.postSubmit.helpers */



Template.postSubmit.events({ 
    'submit form': function(e) {
        e.preventDefault();

        var post = {
            url: $(e.target).find('[name=url]').val(), 
            title: $(e.target).find('[name=title]').val()
        };

        // calls validatePost function if any errors in URL or Title section of form on submit
        var errors = validatePost(post); 
        if (errors.title || errors.url)
            return Session.set('postSubmitErrors', errors);

        Meteor.call('postInsert', post, function(error, result) { 
            // display error message & abort insert
            if (error)
                return throwError(error.reason);

            if (result.postExists)
                throwError('This topic already exists in Ryannit');

            Router.go('postPage', {_id: result._id});

        });  /* Meteor.call('postInsert', post, function(error, result) {  */

    }  /* 'submit form' function */
});  /* Template.postSubmit.events( */




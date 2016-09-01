Template.postSubmit.events({ 
    'submit form': function(e) {
        e.preventDefault();

        var post = {
            url: $(e.target).find('[name=url]').val(), 
            title: $(e.target).find('[name=title]').val()
        };

        Meteor.call('postInsert', post, function(error, result) { 
            // display error message & abort insert
            if (error)
                return alert(error.reason);

            if (result.postExists)
                alert('This topic already exists in Ryannit');

            Router.go('postPage', {_id: result._id});

        });  /* Meteor.call('postInsert', post, function(error, result) {  */

    }  /* 'submit form' function */
});  /* Template.postSubmit.events( */

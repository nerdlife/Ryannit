Template.postSubmit.events({ 
    'submit form': function(e) {
        e.preventDefault();

        var post = {
            url: $(e.target).find('[name=url]').val(), 
            title: $(e.target).find('[name=title]').val()
        }; // var post 

        Meteor.call('postInsert', post, function(error, result) { 
            if (error)
                return alert(error.reason);

            Router.go('postPage', {_id: result._id});
        });  //Meteor.call('postInsert', post, function(error, result) { 

    }  // 'submit form' function
});  // Template.postSubmit.events(

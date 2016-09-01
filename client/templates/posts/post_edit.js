Template.postEdit.events({ 

    // SUBMIT CHANGES/UPDATE EVENT
    'submit form': function(e) {
        e.preventDefault();

        var currentPostId = this._id;

        // new values for post update
        var postProperties = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val()
        }

        // update collection with new values from postProperties var
        Posts.update(currentPostId, {$set: postProperties}, function(error) { 
            if (error) {
                alert(error.reason); 
            }
            else {
                Router.go('postPage', {_id: currentPostId});
            }
        });  /* Posts.update(currentPostId, {$set: postProperties}, function(error) {  */

    },  /* 'submit form': function(e) { */


    // DELETE EVENT
    'click .delete': function(e) { 
        e.preventDefault();

        if (confirm("Delete this post?")) { 
            var currentPostId = this._id;
            Posts.remove(currentPostId);
            Router.go('postsList');
        }

    }  /*  'click .delete': function(e) {  */
        
});  /*  Template.postEdit.events({  */

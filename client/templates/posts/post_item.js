Template.postItem.helpers({

    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    }

});    //   ***END ==> 'Template.postItem.helpers'



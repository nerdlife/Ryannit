var postsData = [
    {
        title: 'Ryan Urie',
        url: 'http://ryanurie.com'
    },
    {
    title: 'Google',
    url: 'http://google.com'
    }, 
    {
    title: 'Stack',
    url: 'http://stackoverflow.com'
  }
];


Template.postsList.helpers({
    posts: postsData
});


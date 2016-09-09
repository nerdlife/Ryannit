// set collection name to 'null' since will never be saved into the  server-side database
Errors = new Mongo.Collection(null);

throwError =  function(message) {
    Errors.insert({ message: message});
};


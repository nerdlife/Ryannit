
 // checking if userId owns the documents
ownsDocument = function(userId, doc) {
    return doc && doc.userId === userId;
}

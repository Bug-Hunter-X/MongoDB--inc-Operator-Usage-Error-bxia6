```javascript
// Incorrect usage of $inc operator in MongoDB update operation
db.collection.updateOne({"_id":ObjectId("651234567890")},{"$inc":{"field":value}});
```
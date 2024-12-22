const {MongoClient} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/bookstore')
  .then(client => {
    console.log('Connected to MongoDB');
    client.close();
  })
  .catch(err => {
    console.error('Connection failed:', err);
  });

let dbConnection

module.exports = {
    connnectToBD: (cb) => {
        MongoClient.connect('mongodb://localhost:27017/bookstore')
        .then((client) => {
            dbConnection = client.db()
            return cb()
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
    }, 
    getDb: () => {return dbConnection}
}
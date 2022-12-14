const { MongoClient } = require("mongodb");
const Db = process.env.MONGO_URL;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            // verify we got a good "db" object
            if (db)
            {
                _db = db.db("movieData");
                console.log("Successfully connected to MongoDB Atlas");
            }
            return callback(err);
        });
    },
    getDb: function () {
        return _db;
    },
}
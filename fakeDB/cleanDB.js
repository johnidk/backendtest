const mongoose = require("mongoose");

const config = require("../config/dev-keys");

const FakeDB = require("./FakeDB");

mongoose.connect(
  config.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  async () => {
    const fakeDB = new FakeDB();
    console.log("starting to populate db...");
    await fakeDB.populate();
    await mongoose.connection.close();
    console.log("DB has been populated");
  }
);

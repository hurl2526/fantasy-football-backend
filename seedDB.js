const mongoose = require('mongoose');
const QBs = require('./routes/Positions/models/QB');
const WRs = require('./routes/Positions/models/WR');
const RBs = require('./routes/Positions/models/RB');
const TEs = require('./routes/Positions/models/TE');
const QBseed = require('./QBseed.json');
const WRseed = require('./WRseed.json');
const RBseed = require('./RBseed.json');
const TEseed = require('./TEseed.json');
// const axios = require('axios');
require('dotenv').config();

const seedFunc = async () => {
  try {
    const QBdata = await QBs.create(QBseed);
    console.log(`${QBdata.length} QBs created`);
    const WRdata = await WRs.create(WRseed);
    console.log(`${WRdata.length} WR created`);
    const RBdata = await RBs.create(RBseed);
    console.log(`${RBdata.length} RB created`);
    const TEdata = await TEs.create(TEseed);
    console.log(`${TEdata.length} TE created`);
    await mongoose.disconnect();
    console.log('MongoDB Disconnected');
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

mongoose
  .connect(
    process.env.MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
    () => {
      mongoose.connection.db.dropDatabase();
    }
  )
  .then(() => {
    console.log('MongoDB Connected');
    seedFunc();
  })
  .catch((err) => console.log(`MongoDB Error: ${err}`));

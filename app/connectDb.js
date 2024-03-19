import mongoose from "mongoose";

export default async () => {
  const DBOPTIONS = {
    dbName: process.env.DBNAME,
    user: process.env.DBUSERNAME,
    pass: process.env.DBPASSWORD,
    authSource: process.env.DBAUTHSOURCE,
  };

  await mongoose.connect(process.env.DATABASE_URL, DBOPTIONS);
};

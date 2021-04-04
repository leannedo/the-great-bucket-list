import mongoose from 'mongoose';

// mongoose connection
let conn: mongoose.Connection | null = null;

/**
 * creates database connection
 */
export const getConnection = async (): Promise<mongoose.Connection> => {
  if (conn === null) {
    conn = await mongoose.createConnection(process.env.DB_URL, {
      bufferCommands: false,
      bufferMaxEntries: 0,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
  }
  return conn;
};

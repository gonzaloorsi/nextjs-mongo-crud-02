import { connect, connection } from "mongoose";

const conn = {
  isConnected: false,
};

export async function connectDB() {
  if (conn.isConnected) return;

  const connection_url = process.env.MONGODB_URI;
  const db = await connect(connection_url);
  console.log(db.connection.db.databaseName);
  conn.isConnected = db.connections[0].readyState;
}

connection.on("connected", () => {
  console.log("MongoDB is connected");
});

connection.on("error", (error) => {
  console.log("Mongoose connection error", error);
});

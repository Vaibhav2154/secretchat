import { log } from "console";
import mongoose from "mongoose";

type Connection = {
	isConnected?: number
}

const connection: Connection = {}


async function dbConnect(): Promise<void> {
	if (connection.isConnected) {
		console.log("Already connected to database");
		return;
	}

	try {
		if (!process.env.MONGODB_URI) {
			throw new Error("MONGODB_URI environment variable is not defined");
		}
		const db = await mongoose.connect(process.env.MONGODB_URI || "", {})

		connection.isConnected = db.connections[0].readyState

		console.log("DB connected successfully");
		console.log(db,connection);
		

	} catch (error) {
		console.error("Failed to connect to database:", error);
		process.exit(1)
	}
}


export default dbConnect;
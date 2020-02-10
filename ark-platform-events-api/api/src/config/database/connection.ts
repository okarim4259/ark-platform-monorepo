import "reflect-metadata";
import { createConnection, getConnection, Connection } from "typeorm";
import { DatabaseParams } from "../properties/properties_db";

export const initDatabaseConnection = async () => {
    const connection = await createConnection(DatabaseParams);
    console.log(`Initialized database connection: ${getConnection().name}`);
    return connection;
};

export const closeDatabaseConnection = async () => {
    await getConnection().close();
};

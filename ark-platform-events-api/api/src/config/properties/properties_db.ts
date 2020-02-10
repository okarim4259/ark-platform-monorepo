let params = null;

const DB_DEV_ENTITIES_PATH = "src/data/entity/**/*.ts";
const DB_DEV_MIGRATIONS_PATH = "src/data/migration/**/*.ts";
const DB_DEV_SUBSCRIBERS_PATH = "src/data/subscriber/**/*.ts";
const DB_PROD_ENTITIES_PATH = "dist/entity/**/*.js";
const DB_PROD_MIGRATIONS_PATH = "dist/migration/**/*.js";
const DB_PROD_SUBSCRIBERS_PATH = "dist/subscriber/**/*.js";

if (
    process.env.NODE_ENV === "production" ||
    process.env.NODE_ENV === "staging"
) {
    params = {
        type: process.env.DB_TYPE,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        synchronize: false,
        logging: false,
        entities: [DB_PROD_ENTITIES_PATH],
        migrations: [DB_PROD_MIGRATIONS_PATH],
        subscribers: [DB_PROD_SUBSCRIBERS_PATH]
    };
} else {
    params = {
        type: process.env.DB_TYPE,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        synchronize: true,
        logging: false,
        entities: [DB_DEV_ENTITIES_PATH],
        migrations: [DB_DEV_MIGRATIONS_PATH],
        subscribers: [DB_DEV_SUBSCRIBERS_PATH]
    };
}

export const DatabaseParams = params;

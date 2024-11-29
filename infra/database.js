import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    password: process.env.POSTGRES_PASSWORD,
    user: process.env.POSTGRES_USER,
    port: process.env.POSTGRES_PORT,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
  });
  await client.connect();

  const result = await client.query(queryObject);

  await client.end();

  return result;
}

export default {
  query: query,
};

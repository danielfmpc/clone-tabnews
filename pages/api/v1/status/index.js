import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query({
    text: `
      SELECT 
      current_setting('max_connections')::int as maxConnections, 
      version() as versionDb, 
      count(pid)::int as currentConnections 
      from pg_stat_activity 
      WHERE datname = $1
    `,
    values: [process.env.POSTGRES_DB],
  });

  const updateAt = new Date().toISOString();

  const status = {
    updated_at: updateAt,
    dependencies: {
      database: {
        version_db: result.rows[0].versiondb,
        max_connections: result.rows[0].maxconnections,
        current_connections: result.rows[0].currentconnections,
      },
    },
  };

  response.status(200).json(status);
}

export default status;

test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  const pasedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(pasedUpdatedAt);

  const { version_db, max_connections, current_connections } =
    responseBody.dependencies.database;

  expect(version_db).toBeDefined();
  expect(version_db).toBe(
    "PostgreSQL 16.0 on x86_64-pc-linux-musl, compiled by gcc (Alpine 12.2.1_git20220924-r10) 12.2.1 20220924, 64-bit",
  );

  expect(max_connections).toBeDefined();
  expect(Number.isInteger(max_connections)).toBe(true);
  expect(max_connections).toBeGreaterThanOrEqual(0);

  expect(current_connections).toBeDefined();
  expect(Number.isInteger(current_connections)).toBe(true);
  expect(current_connections).toEqual(1);
});

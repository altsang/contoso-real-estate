export default ({ env }) => {
  // Log the environment variables to verify they are being loaded correctly
  console.log("DATABASE_HOST:", env("DATABASE_HOST", "127.0.0.1"));
  console.log("DATABASE_PORT:", env.int("DATABASE_PORT", 5432));
  console.log("DATABASE_NAME:", env("DATABASE_NAME", "blog"));
  console.log("DATABASE_USERNAME:", env("DATABASE_USERNAME", "pg"));
  console.log("DATABASE_PASSWORD:", env("DATABASE_PASSWORD", "pg"));
  console.log("DATABASE_SSL_STRICT:", env.bool("DATABASE_SSL_STRICT", false));
  console.log("DATABASE_CA_CERT:", env("DATABASE_CA_CERT", ""));

  return {
    connection: {
      client: "postgres",
      connection: {
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "blog"),
        user: env("DATABASE_USERNAME", "pg"),
        password: env("DATABASE_PASSWORD", "pg"),
        ssl: {
          rejectUnauthorized: env.bool("DATABASE_SSL_STRICT", false),
          ca: env("DATABASE_CA_CERT", ""),
        },
      },
    },
  };
};

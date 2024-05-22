export default ({ env }) => {
  // Log the environment variables to verify they are being loaded correctly
  console.log("DATABASE_HOST:", env("DATABASE_HOST"));
  console.log("DATABASE_PORT:", env.int("DATABASE_PORT"));
  console.log("DATABASE_NAME:", env("DATABASE_NAME"));
  console.log("DATABASE_USERNAME:", env("DATABASE_USERNAME"));
  console.log("DATABASE_PASSWORD:", env("DATABASE_PASSWORD"));
  console.log("DATABASE_SSL_STRICT:", env.bool("DATABASE_SSL_STRICT"));
  console.log("DATABASE_CA_CERT:", env("DATABASE_CA_CERT"));

  return {
    connection: {
      client: "postgres",
      connection: {
        host: env("DATABASE_HOST"),
        port: env.int("DATABASE_PORT"),
        database: env("DATABASE_NAME"),
        user: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
        ssl: {
          rejectUnauthorized: env.bool("DATABASE_SSL_STRICT"),
          ca: env("DATABASE_CA_CERT"),
        },
      },
    },
  };
};

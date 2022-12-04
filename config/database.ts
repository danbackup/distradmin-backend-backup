export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', process.env.PROD ? process.env.DATABASE_HOST : 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', process.env.PROD ? process.env.DATABASE_NAME : 'postgres'),
      user: env('DATABASE_USERNAME', process.env.PROD ? process.env.DATABASE_USERNAME : 'postgres'),
      password: env('DATABASE_PASSWORD', process.env.PROD ? process.env.DATABASE_PASSWORD : 'password'),
      ssl: false,
    },
  },
});
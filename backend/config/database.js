module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),    
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'dentist'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'harsh@822'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      //  ssl: {
      //    rejectUnauthorized: false,
      //  },
    },
    // debug: false,
  },
});
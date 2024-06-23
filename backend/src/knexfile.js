module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '123',
      database: 'Gemini'
    },
    migrations: {
      directory: './migrations'
    }
  }
};
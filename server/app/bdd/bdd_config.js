var connection;

connection.host = process.env.MYSQL_HOST;
connection.port = process.env.MYSQL_PORT;
connection.user = process.env.MYSQL_USER;
connection.password = process.env.MYSQL_PASSWORD;
connection.database = process.env.MYSQL_DATABASE;

module.exports = connection

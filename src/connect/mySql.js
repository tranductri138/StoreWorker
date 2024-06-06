const mysql = require('mysql2');

function connectToMySQL() {
    const connection = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER_NAME,
        port : process.env.MYSQL_PORT,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    })

    connection.connect((error) => {
        if (error) {
            console.error('Lỗi kết nối tới MySQL:', error);
            return;
        }
        console.log('Kết nối thành công tới MySQL!');
    });

    return connection;
}

exports.connectToMySQL = connectToMySQL
const mariadb = require('mariadb');
const config = require('./secret/login.json');

const pool = mariadb.createPool(config);
const client = mariadb.createConnection(config);

const poolConnect = () => {
    const conn = pool.getConnection();
    return conn;
}

const handleConnection = async (data) => {
    /*
    about handler...?
    */
}

const poolQuery = async (data) => {
    let poolConnection = await poolConnect();
    console.log(await poolConnection.query('DESC user_basic'));
}

poolQuery();

module.exports = {
    handleConnection,
}

// prepare statement 사용 
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

const poolQuery = async (query, data) => {
    let poolConnection = await poolConnect();
    try { 
        let kk = await poolConnection.query(query, data);
        return kk[0];
    } catch {
        throw 'Warning: Threat of SQLi or Syntax Error';
    }
}

module.exports = {
    poolQuery,
}

// prepare statement 사용 


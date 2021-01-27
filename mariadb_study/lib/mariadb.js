const mariadb = require('mariadb');
const config = require('./secret/login.json');

let pool = mariadb.createPool(config);

async function GetUserList(){
    let conn, rows;
    try{
        conn = await pool.getConnection();
        await conn.query('USE node_account;')
        rows = await conn.query("select * from user_basic where id=1;");
    }
    catch(err){
        throw err;
    }
    finally{
        if (conn) conn.end();
        return rows[0];
    }
}

/* pool.getConnection((err, conn) => {
    if(!err){
        conn.query();
    }
    conn.release();
}); */

GetUserList()
    .then((rows) => {
        console.log(rows);
    })
    .catch((errMsg) => {
        console.log(errMsg);
    });

module.exports = {
    GetUserList: GetUserList
}
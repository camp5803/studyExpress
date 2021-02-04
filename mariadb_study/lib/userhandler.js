const db = require('./mariadb');

const signup = (data) => {
    for(keys in data.info) {
        data.key.push(keys);
        data.value.push(data.info[keys]);
    }
    console.log(data);
    
    db.poolQuery('INSERT INTO user_basic (email, passwd, name, sex, age, phonenum, birth) VALUES (?, ?, ?, ?, ?, ?, ?)', data.value);   
};

const login = (data) => {
    const id_info = db.poolQuery('SELECT * FROM user_basic where id = ?', data.email);
    
    id_info.then((info) => {
        if(info.passwd == null) {
            throw 'LoginError';
        } 
    })
}                                       

module.exports = {
    signup,
    login,
}

// INSERT INTO test (id, pw) VALUES (?, ?)
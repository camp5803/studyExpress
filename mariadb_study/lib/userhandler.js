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
    const id_info = db.poolQuery('SELECT * FROM user_basic where email = (?)', [data.info.email]);
    console.log(data.info.email);
    console.log(data.info.passwd);

    id_info.then((info) => {
        console.log(info);
        if(data.info.passwd == info.passwd) {
            console.log('로그인 성공');
        } else {
            console.log('시1발로그인실패');
        }
    }).catch(err => {
        console.error(err);
    });
}                                       

module.exports = {
    signup,
    login,
}

// INSERT INTO test (id, pw) VALUES (?, ?)
const con = require('./mariadb');

const TypeError = new Error('TypeError: Need to use STRING for Query');

const syntaxParser = (query) => {
    if(typeof(query) != 'string') throw TypeError;
    return query;
};

const queryHandler = (query) => {
    try {
        syntaxParser(query);
    } catch (TypeError) {
        throw TypeError;
    }
}

const sendQuery = (query, data) => {
    queryHandler(query, () => {
        if(TypeError) {
            throw TypeError;
        } else {
            con.poolQuery(query, data);
        }
    });
    
}

queryHandler('zzz', 'kkk');

module.exports = {
    queryHandler,
}

// DONT NEED..............................
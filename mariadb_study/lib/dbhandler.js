const con = require('./mariadb');

const syntaxParser = (query, method) => {
    if(typeof(query) != 'string') throw 'TypeError: Need to use STRING for Query';
    if(typeof(method) != 'string') throw 'TypeError: Need to use STRING for Method';

    return { query, method };
};

const methodParser = (query, method) => {
    const syntax = syntaxParser(query, method);
    const Upperdata = {
        query: syntax.query.toUpperCase(),
        method: syntax.method.toUpperCase(),
    };

    if(Upperdata.query.indexOf(Upperdata.method)) {
        throw `SyntaxError: Method of Query and your input Method must be the same`;
    }
    
    return true;
}

const queryHandler = (query, method) => {
    try {
        methodParser(query, method);
    } catch (err) {
        throw err;
    }
}

queryHandler('zzz', 'kkk');

module.exports = {
    queryHandler,
}

// DONT NEED..............................
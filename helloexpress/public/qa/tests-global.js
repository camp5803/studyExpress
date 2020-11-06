const { assert } = require("chai")

suite('Global Tests', () => {
    test('page has a vaild title', () => {
        assert(document.title && document.title.match(/\S/) &&
            document.title.toUpperCase() !== 'TODO');
    });
});
"use strict";

System.register([], function (_export, _context) {
    "use strict";

    function square(x) {
        return x * x;
    }

    function diag(x, y) {
        return Math.sqrt(square(x) + square(y));
    }

    return {
        setters: [],
        execute: function () {
            module.exports = {
                square: square,
                diag: diag
            };
        }
    };
});
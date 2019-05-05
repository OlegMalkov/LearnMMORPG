(function (global) {
    "use strict"

    module.exports = function (filename) {
        Context.RunFile('polyfill/unrealengine.js')
        Context.RunFile('polyfill/timers.js')

        require('devrequire')(filename)
    }
})(this)

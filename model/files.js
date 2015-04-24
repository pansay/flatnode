var fs = require('fs'),
    path = require('path');

module.exports = {

    // list files
    listFiles: function listFiles (dir) {
        var arr = [];
        fs.readdirSync(dir).forEach(function(file) {
            var dirpath = path.join(dir, file);
            if (fs.statSync(dirpath).isFile()) {
                arr.push('/' + dirpath);
            }
        });
        return arr;
    }

}
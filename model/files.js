var fs = require('fs'),
    path = require('path'),
    markdown = require('markdown').markdown;

module.exports = {

    // list files
    listFiles: function listFiles (dir) {
        var arr = [];
        fs.readdirSync(dir).forEach(function(file) {
            var dirpath = path.join(dir, file);
            if (fs.statSync(dirpath).isFile()) {
                arr.push(dirpath);
            }
        });
        return arr;
    },

    // read file contents
    readFile: function readFile (filePath) {
        return fs.readFileSync(filePath, {encoding: 'utf-8'});
    },

    readMarkdownFile: function readMarkdownFile (filePath) {
        return markdown.toHTML(this.readFile(filePath));
    }

}
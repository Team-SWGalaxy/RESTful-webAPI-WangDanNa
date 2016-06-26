var fs = require('fs');
var id = 0;

module.exports = function () {

    id += 1;
    fs.writeFile('./maxId.json', JSON.stringify({"maxId": id}));
    return id;
};

const sqlite = require("sqlite-sync");

sqlite.connect('./database/patrimonio.db');

const database = {
    sqlite: sqlite,
    hash: '1d5fe55977ccc9a797e2405af6e4a1aa0789535c'
}

module.exports = database;
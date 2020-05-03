const fillTable = require("../fillTable");
const data = require("../../common/users.json");

const createTableUsers = (db) => {
    const t_name = 'users';

    db.serialize(async function () {
            db.run(`CREATE TABLE IF NOT EXISTS ${t_name} 
                (
                    id          integer     primary key,
                    first_name  varchar(64),
                    last_name   varchar(64),
                    email       varchar(64),
                    gender      varchar(64),
                    ip_address  varchar(16)
                );`);

            console.log(`${t_name} table is creating...`);

            await fillTable(db, t_name, data);
        }
    );
};

module.exports = createTableUsers;
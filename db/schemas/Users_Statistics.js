const fillTable = require("../fillTable");
const data = require("../../common/users_statistic.json");

const createTableUsersStatistic = (db) => {
    const t_name = 'users_statistic';

    db.serialize(async function () {
            db.run(`CREATE TABLE IF NOT EXISTS ${t_name} 
                (
                    user_id     integer     references   users(id),
                    date        date,
                    page_views  integer,
                    clicks      integer
                );`);

            console.log(`${t_name} table is creating...`);

            await fillTable(db, t_name, data);

            console.log('GG!!!');
            db.close();
        }
    );
};

module.exports = createTableUsersStatistic;
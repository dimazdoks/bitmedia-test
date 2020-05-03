const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("./db/bitmedia.sqlite");

const createTableUsers = require("./schemas/Users");
const createTableUsersStatistic = require("./schemas/Users_Statistics");

const users = 'users';
const users_statistic = 'users_statistic';

const initialTable = name => {
    db.get(`SELECT NAME FROM sqlite_master WHERE type='table' AND name='${name}';`, function (err, t_name) {
        if (err || !t_name) {
            switch (name) {
                case users:
                    createTableUsers(db);
                    break;
                case users_statistic:
                    createTableUsersStatistic(db);
                    break;
            }
        } else {
            console.log(`Table '${name}' has been created yet!`);
            return true;
        }
    });
};

DB = {
    async initDB() {
        await initialTable(users);
        await initialTable(users_statistic);
    },

    async getUsersStatistic(first, last) {
        const rows = await new Promise((resolve, reject) => {
            db.all(`SELECT users.*, users_statistic.total_views, users_statistic.total_clicks
                        FROM users
                        LEFT JOIN (
                            SELECT SUM(page_views) as total_views,
                                    SUM(clicks) as total_clicks,
                                    user_id
                            FROM users_statistic
                            GROUP BY user_id
                        ) as users_statistic 
                        ON users.id = users_statistic.user_id
                        WHERE users.id >= ? AND users.id <= ?`,
                [first, last],
                function (err, res) {
                    if (err) {
                        reject(err);
                    }
                    resolve(res);
                });
        });

        const totalCount = await new Promise((resolve, reject) => {
            db.get(`SELECT COUNT(id)
                        FROM users`,
                function (err, res) {
                    if (err) {
                        reject(err);
                    }
                    resolve(res);
                });
        });

        //console.log({totalCount: totalCount['COUNT(id)'], users: rows});
        return {totalCount: totalCount['COUNT(id)'], users: rows};
    },

    async getUser(id, from, to) {
        console.log(id, from, to);

        const rows = await new Promise((resolve, reject) => {
            db.all(`SELECT *
                        FROM users_statistic
                        WHERE user_id = ?
                        AND date BETWEEN ? AND ?`,
                [id, from, to],
                function (err, res) {
                    if (err) {
                        reject(err);
                    }
                    resolve(res);
                });
        });

        const name = await new Promise((resolve, reject) => {
            db.get(`SELECT first_name, last_name
                        FROM users WHERE id = ?`,
                [id],
                function (err, res) {
                    if (err) {
                        reject(err);
                    }
                    resolve(res);
                });
        });

        return {name: name.first_name + ' ' + name.last_name, rows};
    }
};


module.exports = DB;
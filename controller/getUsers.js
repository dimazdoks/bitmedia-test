const db = require("../db/DB_API");

const getUsers = async ({page, users_count}, res) => {
    const first_user = (page - 1) * users_count + 1;
    const last_user = first_user + users_count - 1;

    const users_statistic = await db.getUsersStatistic(first_user, last_user);

    if (!users_statistic) {
        return res.status(400).json({message: 'Не получилось обратиться к базе данных, попробуйте снова...'});
    }

    return res.status(201).json(users_statistic);
};

module.exports = getUsers;
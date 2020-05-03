const db = require("../db/DB_API");

const getUsers = async ({user_id, from, to}, res) => {
    const user = await db.getUser(user_id, from, to);

    if (!user) {
        return res.status(400).json({message: 'Не получилось обратиться к базе данных, попробуйте снова...'});
    }

    return res.status(201).json(user);
};

module.exports = getUsers;
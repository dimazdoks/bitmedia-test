const convertDate = date => {
    let year = date.substring(0, 4);
    let month = date.substring(5, 7);
    let day = date.substring(8, 10);

    let time = Date.parse(year + '-' + month + '-' + day);
    if (isNaN(time))
        return false;
    else
        return year + '-' + month + '-' + day;
};

const userValidator = (req, res) => {
    try {

        if (!req.params.id || !req.query.from || !req.query.to) {
            res.status(400).json({message: 'Недостаточно данных, попробуйте снова...'});
            return false;
        }

        const user_id = Number(req.params.id);
        const from = convertDate(req.query.from);
        const to = convertDate(req.query.to);


        if (isNaN(user_id) || !from || !to) {
            res.status(400).json({message: 'Некоректные данные, попробуйте снова...'});
            return false;
        }

        if (user_id <= 0 || from <= 0 || to <= 0) {
            console.log(req.query.page, req.query.users_count);
            res.status(400).json({message: 'Некоректные данные, попробуйте снова...'});
            return false;
        }

        return {user_id, from, to};
    } catch (e) {
        console.log(e.message);
        res.status(401).json({message: 'Ошибка запроса!'});
        return false;
    }
};

module.exports = userValidator;
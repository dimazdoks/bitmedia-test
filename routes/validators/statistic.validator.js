const statisticValidator = (req, res) => {
    try {
        //console.log(req.query.page, req.query.users_count);

        if (!req.query.page || !req.query.users_count) {
            res.status(400).json({message: 'Недостаточно данных, попробуйте снова...'});
            return false;
        }

        if (isNaN(req.query.page) || isNaN(req.query.users_count)) {
            res.status(400).json({message: 'Некоректные данные, попробуйте снова...'});
            return false;
        }

        const page = Number(req.query.page);
        const users_count = Number(req.query.users_count);

        if (page <= 0 || users_count <= 0) {
            console.log(page, users_count);
            res.status(400).json({message: 'Некоректные данные, попробуйте снова...'});
            return false;
        }

        return {page, users_count};
    } catch (e) {
        console.log(e.message);
        res.status(401).json({message: 'Ошибка запроса!/n' + e.message,});
        return false;
    }
};

module.exports = statisticValidator;
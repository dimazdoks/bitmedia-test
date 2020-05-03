const {Router} = require('express');
const router = Router();

const statisticValidator = require("./validators/statistic.validator");
const userValidator = require("./validators/user.validator");

const getUsers = require("../controller/getUsers");
const getUserStatistic = require("../controller/getUserStatistic");

router.get('/users-statistic', async (req, res) => {
    try {
        const data = statisticValidator(req, res);
        if (data) {
            await getUsers(data, res);
        }
    } catch (e) {
        console.log(e.message);
        return res.status(500).json({message: 'Что-то пошло не так, попробуйте снова...'});
    }
});

router.get('/user/:id', async (req, res) => {
    try {
        const data = userValidator(req, res);
        if (data) {
            await getUserStatistic(data, res);
        }
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова...'});
    }
});

module.exports = router;
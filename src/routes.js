const { Router } = require('express');
const router = Router();

const CityController = require('./controllers/CityController');
const VaccinationController = require('./controllers/VaccinationController');

router.get('/cities', CityController.index);
router.get('/cities/:id', CityController.show);
router.get('/vaccination-points/:cityId', VaccinationController.listByCity);

module.exports = router;

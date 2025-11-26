const VaccinationService = require("../services/VaccinationService");

module.exports = {
  listByCity(req, res) {
    const cityId = Number(req.params.cityId);
    const points = VaccinationService.getByCity(cityId);
    return res.json(points);
  }
};

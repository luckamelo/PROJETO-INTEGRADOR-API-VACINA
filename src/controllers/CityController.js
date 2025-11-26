const CityService = require("../services/CityService");

module.exports = {
  index(req, res) {
    const cities = CityService.getAll();
    return res.json(cities);
  },

  show(req, res) {
    const id = Number(req.params.id);
    const city = CityService.getById(id);

    if (!city) {
      return res.status(404).json({ error: "Cidade não encontrada" });
    }

    return res.json(city);
  }
};

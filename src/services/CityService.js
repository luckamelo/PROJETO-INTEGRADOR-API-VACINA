const cities = [
  { id: 1, name: "Maceió", state: "AL" },
  { id: 2, name: "Arapiraca", state: "AL" },
  { id: 3, name: "Palmeira dos Índios", state: "AL" }
];

module.exports = {
  getAll() {
    return cities;
  },
  getById(id) {
    return cities.find(c => c.id === id);
  }
};

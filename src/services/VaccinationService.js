const points = [
  {
    id: 101,
    cityId: 1,
    name: 'UBS Ponta Verde',
    address: 'Rua Engenheiro Mário de Gusmão, 500 - Ponta Verde, Maceió',
    openingHours: '08:00 - 17:00',
    vaccinesAvailable: ['Sarampo', 'Meningite', 'Pólio'],
  },
  {
    id: 102,
    cityId: 1,
    name: 'Centro de Imunização Maceió',
    address: 'Av. Moreira e Silva, 100 - Centro',
    openingHours: '07:00 - 19:00',
    vaccinesAvailable: ['Sarampo', 'COVID-19', 'Febre Amarela', 'Meningite'],
  },
  {
    id: 201,
    cityId: 2,
    name: 'UBS Arapiraca Centro',
    address: 'Praça X, 123 - Centro, Arapiraca',
    openingHours: '08:00 - 16:00',
    vaccinesAvailable: ['Pólio', 'Tétano', 'Hepatite B'],
  },
];

module.exports = {
  getByCity(cityId) {
    return points.filter((p) => p.cityId === cityId);
  },
};

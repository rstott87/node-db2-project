// STRETCH
const cars = [
    {
    id: 1,
    vin: 122131232,
    make: 'toyota',
    model: 'prius',
    mileage: 23123,
    title: 'clean',
    transmission: 'manual',
},
{
    id: 2,
    vin: 12222122231232,
    make: 'towwyota',
    model: 'prius',
    mileage: 23123,
    title: 'cleeeean',
    transmission: 'mawwwnual',
},
{
    id: 3,
    vin: 122132221232,
    make: 'toyotffa',
    model: 'prissus',
    mileage: 23123,
    title: 'cleaan',
    transmission: 'manuasl',
}
]

exports.seed = function(knex) {
    return knex('cars')
    .truncate().then(() => {
        return knex('cars').insert(cars);
    })
}


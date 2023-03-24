// STRETCH
const cars = [

{
    car_id: '1',
    make: 'Toyota'
}, 

{
    car_id: '2',
    make: 'Ford'
}, {
    car_id: '3',
    make: 'Tesla'
}

]

exports.seed = function (knex) {
    return knex('cars').truncate().then(() => {
        return knex('cars').insert(cars)
    })
}

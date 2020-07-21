const knex = require('../connect');

const create = async ({
  name, brand, year, description, sold,
}) => {
  const newVehicle = {
    vehicle: name, brand, year, description, sold,
  };

  await knex('vehicles').insert(newVehicle);

  return newVehicle;
};

const update = async ({
  id, name, brand, year, description, sold,
}) => {
  const vehicle = {
    vehicle: name, brand, year, description, sold,
  };

  await knex('vehicles').where('id', id).update(vehicle);

  return vehicle;
};

const find = async ({ page = 1, vehicle }) => {
  const [count] = await knex('vehicles').count('*').modify((builder) => {
    if (vehicle) builder.where('vehicle', 'like', `%${vehicle}%`).count();
  });

  const qtdPages = (Math.ceil(count['count(*)'] / 5));

  const vehicles = await knex('vehicles').select('*').modify((builder) => {
    if (vehicle) builder.where('vehicle', 'like', `%${vehicle}%`);
    if (page) builder.offset((page - 1) * 5).limit(5);
  });

  return { vehicles, qtdPages };
};

const findOne = async ({ id }) => {
  const vehicle = await knex('vehicles').where('id', id).select('*');

  return vehicle;
};

const deleteOne = async ({ id }) => {
  const deleted = await knex('vehicles').where('id', id).select('*').delete();

  if (!deleted) throw new Error('Can\'t delete this vehicle');

  return true;
};

module.exports = {
  create,
  deleteOne,
  find,
  findOne,
  update,
};

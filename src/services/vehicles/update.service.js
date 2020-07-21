const vehicleRepository = require('../../database/repositories/vehicle.repository');
const schema = require('../../database/schemas/vehicle.schema');

const execute = async ({
  id, name, brand, year, description, sold,
}) => {
  try {
    // validate id

    await schema.validate({
      name,
      brand,
      year,
      description,
      sold,
    }, {
      abortEarly: false,
    });

    const vehicle = await vehicleRepository.update({
      id, name, brand, year, description, sold,
    });

    return vehicle;
  } catch (err) {
    throw new Error(err.errors);
  }
};

module.exports = {
  execute,
};

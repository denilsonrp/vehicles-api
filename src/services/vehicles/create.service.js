const vehicleRepository = require('../../database/repositories/vehicle.repository');
const schema = require('../../database/schemas/vehicle.schema');

const execute = async ({
  name, brand, year, description, sold,
}) => {
  try {
    await schema.validate({
      name,
      brand,
      year,
      description,
      sold,
    }, {
      abortEarly: false,
    });

    const vehicle = await vehicleRepository.create({
      name, brand, year, description, sold,
    });

    return vehicle;
  } catch (err) {
    throw new Error(err.errors);
  }
};

module.exports = {
  execute,
};

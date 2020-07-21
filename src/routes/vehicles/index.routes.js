const express = require('express');

const vehicleRepository = require('../../database/repositories/vehicle.repository');
const createVehicleService = require('../../services/vehicles/create.service');
const updateVehicleService = require('../../services/vehicles/update.service');

const vehiclesRouter = express.Router();

/**
 * Return all items in vehicles table, including filter by vehicle name
 *
 */
vehiclesRouter.get('/', async (request, response) => {
  const { page, vehicle } = request.query;
  const { vehicles, qtdPages } = await vehicleRepository.find({ vehicle, page });

  return response.json({ vehicles, qtdPages });
});

/**
 * Return one item in vehicles table, matching by id
 *
 */
vehiclesRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const vehicle = await vehicleRepository.findOne({ id });

  return response.json(vehicle);
});

/**
 * Create a new item in vehicle table
 *
 */
vehiclesRouter.post('/', async (request, response) => {
  const {
    vehicle: name, brand, year, description, sold,
  } = request.body;

  try {
    const vehicle = await createVehicleService.execute({
      name, brand, year, description, sold,
    });

    return response.json(vehicle);
  } catch (err) {
    return response.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
});

/**
 * Update one item in vehicle table, matching by id
 *
 */
vehiclesRouter.put('/:id', async (request, response) => {
  const {
    vehicle: name, brand, year, description, sold,
  } = request.body;

  const { id } = request.params;

  try {
    const vehicle = await updateVehicleService.execute({
      id, name, brand, year, description, sold,
    });

    return response.json(vehicle);
  } catch (err) {
    return response.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
});

/**
 * Delete one item in vehicles table, matching by id
 *
 */
vehiclesRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  try {
    await vehicleRepository.deleteOne({ id });

    return response.status(204).send();
  } catch (err) {
    return response.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
});

module.exports = vehiclesRouter;

const yup = require('yup');

const schema = yup.object().shape({
  name: yup.string().required(),
  brand: yup.string().required(),
  year: yup.number().required().positive().integer(),
  description: yup.string(),
  sold: yup.boolean(),
});

module.exports = schema;

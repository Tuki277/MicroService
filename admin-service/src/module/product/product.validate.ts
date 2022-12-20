import * as Joi from 'joi';

const payload = {
  title: Joi.string().required().trim(),
};

const params = {
  id: Joi.number().required(),
};

export const createProductSchema = Joi.object({
  ...payload,
});

export const updateProductSchema = Joi.object({
  ...payload,
  ...params,
});

export const deleteProductSchema = Joi.object({
  ...params,
});

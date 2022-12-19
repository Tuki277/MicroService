import * as Joi from 'joi';

const payload = {
  name: Joi.string().trim().required(),
};

const params = {
  id: Joi.number().required(),
};

export const createCategorySchema = Joi.object({
  ...payload,
});

export const deleteCategorySchema = Joi.object({
  ...params,
});

export const updateCategorySchema = Joi.object({
  ...payload,
  ...params,
});

import * as bcrypt from 'bcrypt';
import { BaseResponse } from '../base/base.response';

const response = new BaseResponse();

export const comparePassword = async (
  password: string,
  userPassword: string,
) => {
  try {
    return await bcrypt.compare(password, userPassword);
  } catch (error) {
    response.errorResponse(error.message);
  }
};

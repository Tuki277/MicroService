import * as bcrypt from 'bcrypt';
import { BaseResponse } from '../base/base.response';

const response = new BaseResponse();

export const hashPassword = async (password: string) => {
  try {
    const salt = await bcrypt.genSalt(parseInt(process.env.SALT_WORK_FACTOR));
    const hash = await bcrypt.hashSync(password, salt);
    return hash;
  } catch (error) {
    response.errorResponse(error.message);
  }
};

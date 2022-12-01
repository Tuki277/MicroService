import {
  HttpException,
  HttpStatus,
  MethodNotAllowedException,
  NotFoundException,
} from '@nestjs/common';
import { Response as ResponseExpress } from 'express';

export class BaseResponse {
  jsonResponse = <T>(
    res: ResponseExpress,
    statusCode: HttpStatus,
    data?: T,
  ) => {
    if (statusCode == HttpStatus.OK) {
      res.status(HttpStatus.OK).send({
        statusCode: HttpStatus.OK,
        data,
        message: 'Success',
      });
    } else if (
      statusCode == HttpStatus.CREATED ||
      HttpStatus.NO_CONTENT ||
      HttpStatus.FORBIDDEN ||
      HttpStatus.UNAUTHORIZED
    ) {
      res.status(statusCode).send({
        statusCode: statusCode,
        message: 'Success',
      });
    } else {
      throw new MethodNotAllowedException();
    }
  };

  errorResponse = (error: any, statusCode: HttpStatus = 400) => {
    if (error === 'Not Found') {
      throw new NotFoundException();
    }
    throw new HttpException(error, statusCode);
  };
}

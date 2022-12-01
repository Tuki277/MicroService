import {
  HttpException,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { Response as ResponseExpress } from 'express';

export class BaseResponse {
  jsonResponse = <T>(
    res: ResponseExpress,
    statusCode: HttpStatus,
    data?: T,
  ) => {
    if (statusCode == HttpStatus.OK) {
      res.status(HttpStatus.OK).send(data);
    } else if (
      statusCode == HttpStatus.CREATED ||
      HttpStatus.NO_CONTENT ||
      HttpStatus.FORBIDDEN ||
      HttpStatus.UNAUTHORIZED
    ) {
      res.status(statusCode).send();
    } else {
      res.status(HttpStatus.METHOD_NOT_ALLOWED).send('Error status code');
    }
  };

  errorResponse = (error: any, statusCode: HttpStatus = 400) => {
    if (error === 'Not Found') {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
    if (error === 'Unauthorized') {
      throw new UnauthorizedException();
    }
    throw new HttpException(error, statusCode);
  };
}

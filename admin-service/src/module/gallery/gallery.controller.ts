import {
  Controller,
  Post,
  Res,
  Req,
  UseInterceptors,
  HttpStatus,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { BaseResponse } from 'src/common/base/base.response';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { GalleryService } from './gallery.service';
import { Request, Response } from 'express';
import { Gallery } from './gallery.entity';

@Controller('gallery')
export class GalleryController extends BaseResponse {
  constructor(private galleryService: GalleryService) {
    super();
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('thumbnail', {
      fileFilter: function (req, file, cb) {
        const ext = file.originalname
          .split('.')
          .filter(Boolean)
          .slice(1)
          .join('.');
        if (ext !== 'png' && ext !== 'jpg' && ext !== 'jpeg') {
          req.fileValidationError = false;
          return cb(null, false);
        }
        cb(null, true);
      },
      storage: diskStorage({
        destination: process.env.LOCATION_UPLOAD_FILE,
        filename: (req, file, callback) => {
          const id = uuidv4();
          const filename = id + file.originalname;
          callback(null, filename);
        },
      }),
    }),
  )
  async uploadGallery(@Req() req: Request, @Res() res: Response) {
    const dataUpload: Partial<Gallery> = {
      product_id: req.body.product_id,
      thumbnail: process.env.LOCATION_URL + (req as any).file.filename,
    };
    if ((req as any).fileValidationError) {
      this.errorResponse('Format file not supported', HttpStatus.BAD_REQUEST);
    } else {
      await this.galleryService.createGallery(dataUpload);
      this.jsonResponse(res, HttpStatus.CREATED);
    }
  }
}

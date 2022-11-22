import { Controller, Post, Res, Req, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { BaseResponse } from 'src/common/base/base.response';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';

@Controller('gallery')
export class GalleryController extends BaseResponse {
  constructor() {
    super();
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const id = uuidv4();
          const filename = id + file.originalname;
          callback(null, filename);
        },
      }),
    }),
  )
  async uploadGallery(@Req() req: Request, @Res() res: Response) {
    try {
      const reqFile = (req as any).file;
    } catch (error) {
      console.log(error);
    }
  }
}

import { Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { BaseResponse } from 'src/common/base/base.response';
import { Gallery } from './gallery.entity';
import { GalleryService } from './gallery.service';
import { faker } from '@faker-js/faker';

@Controller('fake')
export class FakeGallery extends BaseResponse {
  constructor(private galleryService: GalleryService) {
    super();
  }
  @Post('gallery')
  async fakeCode(@Req() req: Request, @Res() res: Response) {
    for (let index = 0; index < 5000; index++) {
      const data: Partial<Gallery> = {
        thumbnail: faker.image.image(),
        product_id: faker.datatype.number({
          min: 30003,
          max: 40002,
        }),
      };
      this.galleryService.createGallery(data);
    }
    return this.jsonResponse(res, HttpStatus.OK);
  }
}

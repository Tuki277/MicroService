import { Injectable } from '@nestjs/common';
import { BaseResponse } from 'src/common/base/base.response';
import { Gallery } from './gallery.entity';
import { GalleryRepository } from './gallery.repository';

@Injectable()
export class GalleryService extends BaseResponse {
  constructor(private galleryRepository: GalleryRepository) {
    super();
  }

  async createGallery(input: Partial<Gallery>) {
    try {
      return await this.galleryRepository.post(input);
    } catch (error) {
      this.errorResponse(error.message);
    }
  }
}

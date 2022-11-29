import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gallery } from './gallery.entity';

@Injectable()
export class GalleryRepository {
  constructor(
    @InjectRepository(Gallery)
    private galleryEntity: Repository<Gallery>,
  ) {}

  async post(input: Partial<Gallery>): Promise<Gallery> {
    const dataInput = await this.galleryEntity.create(input);
    return this.galleryEntity.save(dataInput);
  }
}

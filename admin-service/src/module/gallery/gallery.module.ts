import { Module } from '@nestjs/common';
import { GalleryController } from './gallery.controller';

@Module({
  imports: [],
  controllers: [GalleryController],
  providers: [],
})
export class GalleryModule {}

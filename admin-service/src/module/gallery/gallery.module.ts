import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FakeGallery } from './fake.controller';
import { GalleryController } from './gallery.controller';
import { Gallery } from './gallery.entity';
import { GalleryRepository } from './gallery.repository';
import { GalleryService } from './gallery.service';

@Module({
  imports: [TypeOrmModule.forFeature([Gallery])],
  controllers: [GalleryController, FakeGallery],
  providers: [GalleryRepository, GalleryService],
})
export class GalleryModule {}

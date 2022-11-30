import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from '../category/category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, nullable: false })
  title: string;

  @Column({ default: 0 })
  price: string;

  @Column({ default: 0 })
  discount: number;

  @Column({ nullable: false })
  thumbnail: string;

  @Column({ default: '' })
  description: string;

  @Column({ default: 0 })
  deleted: number; // 0: deleted, 1: active

  @ManyToOne((type) => Category, (category) => category.id, { nullable: false })
  category: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Code {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, nullable: false })
  code: string;

  @Column({ nullable: false, default: 0 })
  discount: number;
}

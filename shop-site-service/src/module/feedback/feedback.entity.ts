import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Feedback {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, nullable: false })
  firstname: string;

  @Column({ length: 255, nullable: false })
  lastname: string;

  @Column({ length: 255, nullable: false })
  email: string;

  @Column({ length: 11, nullable: false })
  phone_number: string;

  @Column({ default: '' })
  note: string;

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

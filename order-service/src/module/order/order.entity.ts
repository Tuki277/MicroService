import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  userId: number;

  @Column({ default: '' })
  fullname: string;

  @Column({ default: '' })
  email: string;

  @Column({ default: '' })
  phoneNumber: string;

  @Column({ default: '' })
  address: string;

  @Column({ default: '' })
  note: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  order_date: Date;

  @Column({ default: 0 })
  status: number; // 0 session // 1 pending, 2 processed, 3 // finish

  @Column({ default: 0 })
  totalMoney: number;
}

@Entity()
export class Order_Detail {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Orders, { nullable: false })
  order: number;

  @Column()
  productId: number;

  @Column()
  price: string;

  @Column()
  quantity: number;

  @Column({ default: 0 })
  totalMoney: number;
}

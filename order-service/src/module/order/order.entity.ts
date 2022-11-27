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

  @Column()
  user_id: number;

  @Column()
  fullname: string;

  @Column()
  email: string;

  @Column()
  phone_number: string;

  @Column()
  address: string;

  @Column()
  note: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  order_date: Date;

  @Column()
  status: number;

  @Column()
  total_money: number;
}

@Entity()
export class Order_Detail {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Orders, { nullable: false })
  order_id: number;

  @Column()
  product_id: number;

  @Column()
  price: number;

  @Column()
  num: number;

  @Column()
  total_meney: number;
}

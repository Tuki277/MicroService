import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './../user/user.entity';

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sessionId: string;

  @OneToOne(() => User, { nullable: false })
  @JoinColumn()
  user: number;

  @Column({ default: 0 })
  online: number; // 0: offline, 1: online
}

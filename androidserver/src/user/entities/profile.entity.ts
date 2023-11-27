import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickname: string;

  @Column()
  avatar: string;

  @Column()
  birthday: string;

  @Column()
  gender: string;

  @Column()
  userId: number;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}

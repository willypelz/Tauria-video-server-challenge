import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

import User from '@modules/users/entities/User';
import RoomParticipant from './RoomParticipant';

@Entity('rooms')
class Room {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ name: 'host_user', unique: false })
  hostUser: string;

  @Column({ name: 'capacity_limit', nullable: true, default: 5 })
  capacityLimit: number;

  @OneToMany(type => RoomParticipant, roomPartipant => roomPartipant.room)
  @JoinColumn({ name: 'room_id' })
  participants: RoomParticipant[];

  @ManyToOne(type => User, room => Room)
  @JoinColumn({ name: 'host_user' })
  host: User;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

export default Room;

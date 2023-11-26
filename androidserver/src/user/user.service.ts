import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  getUserByUsername(username: string) {
    return this.userRepository.findOneBy({ username: username });
  }

  insertUser(user: User) {
    return this.userRepository.save(user);
  }

  getUserById(id: number) {
    return this.userRepository.find({ where: { id: id } });
  }
}

import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        userName: 'john',
        password: 'changeme',
      },
      {
        userId: 2,
        userName: 'chris',
        password: 'secret',
      },
      {
        userId: 3,
        userName: 'maria',
        password: 'guess',
      },
    ];
  }

  async findOne(userName: string): Promise<User | undefined> {
    return this.users.find(user => user.userName === userName);
  }
}
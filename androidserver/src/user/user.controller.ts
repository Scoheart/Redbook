import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { ProfileService } from './profile.service';

interface Response {
  code: number;
  message: string;
  data: any;
}

@Controller('user')
export class UsersController {
  constructor(
    private userService: UserService,
    private profileServie: ProfileService,
  ) {}

  @Post('login')
  async Login(@Body() user: User): Promise<any> {
    const { username, password } = user;
    console.log(user);
    const _user = await this.userService.getUserByUsername(username);

    const res: Response = {
      code: 401,
      message: '密码错误',
      data: null,
    };

    if (_user) {
      if (_user.password === password) {
        res.code = 200;
        res.message = '成功登录';
        return res;
      }
      return res;
    } else {
      res.code = 401;
      res.message = '用户名不存在';
      return res;
    }
  }

  @Post('register')
  async regiser(@Body() user: User) {
    console.log(user);
    const _getUser = await this.userService.getUserByUsername(user.username);
    if (_getUser) {
      return {
        code: 401,
        message: '用户吗已经存在',
        data: null,
      };
    }

    const _user = await this.userService.insertUser(user);
    if (_user) {
      return {
        code: 200,
        message: '成功注册',
        data: null,
      };
    } else {
      return {
        code: 401,
        message: '注册失败',
        data: null,
      };
    }
  }

  @Get('profile/:id')
  getUserInfoById(@Param('id') id: number) {
    const profile = this.profileServie.getUserProfileById(id);
    const user = this.userService.getUserById(id);
    console.log('getUserInfo');
    console.log(profile);
    console.log(user);
    return this.profileServie.getUserProfileById(id);
  }
}

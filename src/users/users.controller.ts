import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service'



@Controller('auth')
export class UsersController {
   constructor(
     private readonly userSevice : UsersService
   ){}
    @Post('/signup')
    createUser(@Body() body : CreateUserDto)  {
        console.log(body)

        this.userSevice.create(body.email, body.password);
    }

}

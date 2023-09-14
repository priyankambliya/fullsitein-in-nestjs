import { Body, Controller, HttpStatus, NotAcceptableException, Post, Render, Req, Res, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/schemas/user.schema';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post('signup')
    @Render("home")
    async createUser(@Res() response, @Body() user: User) {
        const RegisterUser = await this.usersService.createUser(user);
        if (!RegisterUser) throw new NotAcceptableException("User not created..");
        return { title: "home" }
    }

}

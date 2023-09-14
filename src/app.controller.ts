import { Body, Controller, Get, Post, Render, Request, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './schemas/user.schema';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/signup')
  @Render('signup')
  signUpPage() {
    return { title: "Signup" };
  }

  @Get('/login')
  @Render('login')
  loginPAge() {
    return { title: "Login" };
  }

  @UseGuards(AuthGuard("local"))
  @Post('auth/login')
  @Render("home")
  async login(@Request() req, @Body() user: User) {
    if (!req.user) throw new UnauthorizedException("user not found..")
    return { title: "home" }
  }
}

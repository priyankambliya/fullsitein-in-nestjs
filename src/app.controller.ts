import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { join } from 'path';

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
}

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserAlreadyExistsException } from 'src/handlers/errorHandler';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UsersService {
    constructor(private jwtService: JwtService,
        @InjectModel(User.name) private UserModel: Model<UserDocument>
    ) { }

    async createUser(user: User): Promise<User> {
        const isUser = await this.UserModel.findOne({ email: user.email });
        if (isUser) throw new UserAlreadyExistsException("This email already exist..")
        return await this.UserModel.create({
            username: user.username,
            email: user.email,
            password: user.password
        })
    }

    async findUser(email: string) {
        return await this.UserModel.findOne({ email });
    }
}

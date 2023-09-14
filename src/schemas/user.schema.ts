import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, now } from 'mongoose';
import { Roles } from "src/roles/roles";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    username: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop({ default: Roles.USER })
    role: Roles;

    @Prop({ default: now() })
    createdAt: Date;

    @Prop({ default: now() })
    updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User)
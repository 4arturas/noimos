import {Body, Controller, Delete, Get, Param, Post, Put, Req, Res, UseGuards} from '@nestjs/common';
import {AuthGuard} from "../auth/auth.guard";
import type {Request, Response} from 'express'
import {UserService} from "./user.service";
import {Post as PostModel, User as UserModel} from ".prisma/client";

@Controller('users')
export class UsersController {

    constructor(
        private readonly userService: UserService,
    ) {
    }


    @Get()
    @UseGuards(new AuthGuard())
    async findAll(@Req() request: Request, @Res({passthrough: true}) res: Response): Promise<any> {
        const users: any = await this.userService.users({});
        res
            .header({'X-Total-Count': users.length})
            .header({'Access-Control-Expose-Headers': 'X-Total-Count'});
        return users;
    }

    @Get(':id')
    @UseGuards(new AuthGuard())
    async findOne(@Param() params: any, @Res({passthrough: true}) res: Response): Promise<any> {
        res
            .header({'X-Total-Count': 1})
            .header({'Access-Control-Expose-Headers': 'X-Total-Count'});
        return this.userService.user({id: Number(params.id)});
    }

    @Post()
    @UseGuards(new AuthGuard())
    async create(
        @Body() userData: { name: string, username: string, email: string, phone: string, website: string },
    ): Promise<UserModel> {
        const {name, username, email, phone, website} = userData;
        return this.userService.createUser({
            name, username, email, phone, website
        });
    }

    @Put(':id')
    @UseGuards(new AuthGuard())
    async update(
        @Body() postData: { id: number; name: string, username: string, email: string, phone: string, website:string },
    ): Promise<UserModel> {
        const {id, name, username, email, phone, website} = postData;
        return this.userService.updateUser({
            where: {id: Number(id)},
            data: {name, username, email, phone, website},
        });
    }

    @Delete(':id')
    @UseGuards(new AuthGuard())
    async deleteUser(@Param('id') id: string): Promise<UserModel> {
        return this.userService.deleteUser({id: Number(id)});
    }

}

import {Controller, Get, Param, Req, Res, UseGuards} from '@nestjs/common';
import {AuthGuard} from "../auth/auth.guard";
// import { GenericResponse } from './generic-response.decorator'
import type { Response } from 'express'

@Controller('users')
export class UsersController {
    @Get()
    @UseGuards(new AuthGuard())
    async findAll(@Req() request: Request, @Res({ passthrough: true }) res: Response): Promise<any> {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json()
        res
            .header({'X-Total-Count': users.length})
            .header({'Access-Control-Expose-Headers': 'X-Total-Count'});
        return users;
    }

    @Get(':id')
    async findOne(@Param() params: any, @Res({ passthrough: true }) res: Response): Promise<any> {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
        const user = await response.json()
        res
            .header({'X-Total-Count': 1})
            .header({'Access-Control-Expose-Headers': 'X-Total-Count'});
        return user;
    }
}

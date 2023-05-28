import {Controller, Get, Req, UseGuards} from '@nestjs/common';
import {AuthGuard} from "../auth/auth.guard";

@Controller('cats')
export class CatsController {
    @Get()
    @UseGuards(new AuthGuard())
    findAll(@Req() request: Request): string {
        return 'This action returns all cats';
    }
}

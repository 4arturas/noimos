import {Controller, Get, Param, Req, Res, UseGuards} from '@nestjs/common';
import {AuthGuard} from "../auth/auth.guard";
import {Response} from "express";

@Controller('posts')
export class PostsController {
    @Get()
    // @UseGuards(new AuthGuard())
    async findAll(@Req() request: Request, @Res({ passthrough: true }) res: Response): Promise<any> {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json()
        res
            .header({'X-Total-Count': posts.length})
            .header({'Access-Control-Expose-Headers': 'X-Total-Count'});
        return posts;

    }

    @Get(':id')
    async findOne(@Param() params: any, @Res({ passthrough: true }) res: Response): Promise<any> {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
        const post = await response.json()
        res
            .header({'X-Total-Count': 1})
            .header({'Access-Control-Expose-Headers': 'X-Total-Count'});
        return post;
    }
}

import {Body, Controller, Delete, Get, Param, Post, Put, Req, Res, UseGuards} from '@nestjs/common';
import {AuthGuard} from "../auth/auth.guard";
import {Response} from "express";
import {PostService} from "./post.service";
import { Post as PostModel } from '@prisma/client';

@Controller('posts')
export class PostsController {
    constructor(
        private readonly postService: PostService,
    ) {}
    @Get()
    @UseGuards(new AuthGuard())
    async findAll(@Req() request: Request, @Res({ passthrough: true }) res: Response): Promise<any> {
        const posts:any = await this.postService.posts({});
        res
            .header({'X-Total-Count': posts.length})
            .header({'Access-Control-Expose-Headers': 'X-Total-Count'});
        return posts;

    }

    @Get(':id')
    @UseGuards(new AuthGuard())
    async findOne(@Param() params: any): Promise<any> {
        return this.postService.post({ id: Number(params.id) });
    }

    @Post()
    @UseGuards(new AuthGuard())
    async create(
        @Body() postData: { userId: number; title: string; body: string },
    ): Promise<PostModel> {
        const { userId, title, body } = postData;
        console.log(postData);
        return this.postService.createPost({
            userId,
            title,
            body,
        });
    }

    @Put(':id')
    @UseGuards(new AuthGuard())
    async update(
        @Body() postData: { id: number;  userId: number; title: string; body: string },
    ): Promise<PostModel> {
        const { id, title, body } = postData;
        return this.postService.updatePost({
            where: { id: Number(id) },
            data: { title, body },
        });
    }

    @Delete(':id')
    @UseGuards(new AuthGuard())
    async deletePost(@Param('id') id: string): Promise<PostModel> {
        return this.postService.deletePost({ id: Number(id) });
    }
}

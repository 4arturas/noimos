import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';
import { Session } from './auth/session.decorator';
import {PostService} from "./posts/post.service";
import {UserService} from "./users/user.service";
import { User as UserModel, Post as PostModel } from '@prisma/client';

/*interface UserModel {
  id: number
  email: string
  name: string
  posts: PostModel
}
interface PostModel {
  id: string
title:string
content:string
    published:boolean
author: UserModel
authorId: number
}*/

@Controller()
export class AppController {
  constructor(
      private readonly appService: AppService,
      private readonly userService: UserService,
      private readonly postService: PostService,
  ) {

  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/sessioninfo')
  @UseGuards(new AuthGuard())
  getSessionInformation(@Session() session: SessionContainer): any {
    return {
      sessionHandle: session.getHandle(),
      userId: session.getUserId(),
      accessTokenPayload: session.getAccessTokenPayload(),
    };
  }



/*



  @Get('post/:id')
  async getPostById(@Param('id') id: string): Promise<PostModel> {
    return this.postService.post({ id: Number(id) });
  }

  @Get('feed')
  async getPublishedPosts(): Promise<PostModel[]> {
    return this.postService.posts({
      where: { published: true },
    });
  }

  @Get('filtered-posts/:searchString')
  async getFilteredPosts(
      @Param('searchString') searchString: string,
  ): Promise<PostModel[]> {
    return this.postService.posts({
      where: {
        OR: [
          {
            title: { contains: searchString },
          },
          {
            content: { contains: searchString },
          },
        ],
      },
    });
  }

  @Post('post')
  async createDraft(
      @Body() postData: { title: string; content?: string; authorEmail: string },
  ): Promise<PostModel> {
    const { title, content, authorEmail } = postData;
    return this.postService.createPost({
      title,
      content,
      author: {
        connect: { email: authorEmail },
      },
    });
  }

  @Post('user')
  async signupUser(
      @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Put('publish/:id')
  async publishPost(@Param('id') id: string): Promise<PostModel> {
    return this.postService.updatePost({
      where: { id: Number(id) },
      data: { published: true },
    });
  }

  @Delete('post/:id')
  async deletePost(@Param('id') id: string): Promise<PostModel> {
    return this.postService.deletePost({ id: Number(id) });
  }
*/

}

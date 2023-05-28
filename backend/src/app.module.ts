import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthModule} from './auth/auth.module';
import {UsersController} from './users/users.controller';
import {PostsController} from './posts/posts.controller';
import * as SuperTokensConfig from './config';
import {PostService} from "./posts/post.service";
import {UserService} from "./users/user.service";
import {PrismaService} from "./prisma.service";

@Module({
    imports: [
        AuthModule.forRoot({
            // try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
            connectionURI: SuperTokensConfig.connectionUri,
            // apiKey: "IF YOU HAVE AN API KEY FOR THE CORE, ADD IT HERE",
            appInfo: SuperTokensConfig.appInfo,
        }),
    ],
    controllers: [AppController, UsersController, PostsController],
    providers: [AppService, PrismaService, UserService, PostService],
})
export class AppModule {
}

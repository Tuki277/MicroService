import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from 'process';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthRoleAdminMiddleware } from './middlewares/authAdminRole.middleware';
import { GetAccessTokenMiddleware } from './middlewares/getAccessToken.middleware';
import { AuthModule } from './module/auth/auth.module';
import { Role } from './module/role/role.entity';
import { RoleModule } from './module/role/role.module';
import { Tokens } from './module/user/tokens.entity';
import { User } from './module/user/user.entity';
import { UserModule } from './module/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: env.HOST,
      port: parseInt(env.PORT),
      username: env.USERNAME,
      password: env.PASSWORD,
      database: env.DATABASE,
      entities: [User, Tokens, Role],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    RoleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(GetAccessTokenMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
    consumer
      .apply(AuthRoleAdminMiddleware)
      .exclude(
        { path: '/api/auth/login', method: RequestMethod.POST },
        { path: '/api/auth/register', method: RequestMethod.POST },
      )
      // .exclude({ path: '/api/auth/register', method: RequestMethod.POST })
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}

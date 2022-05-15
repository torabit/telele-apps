import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GameApiModule } from './resolver/game/gameApi.module';
import { ProfileApiModule } from './resolver/profile/profileApi.module';
import { TagApiModule } from './resolver/tag/tagApi.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
@Module({
  imports: [
    GameApiModule,
    TagApiModule,
    ProfileApiModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: true,
      typePaths: ['./**/*.gql'],
      sortSchema: true,
      // ResolveFieldに対してInterceptorを適用させる、過度に使いすぎるとパフォーマンスの低下につながる
      fieldResolverEnhancers: ['interceptors'],
    }),
  ],
})
export class AppModule {}

import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { logger } from './middleware/logger.middleware';
import { CatsController } from './cats/cats.controller';
import { ErroTestController } from './erro-test/erro-test.controller';

@Module({
  imports: [CatsModule],
  controllers: [AppController, ErroTestController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .forRoutes(CatsController);
  }
}
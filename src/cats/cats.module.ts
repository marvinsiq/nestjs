import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    controllers: [CatsController],
    providers: [CatsService],
    exports: [CatsService],
    imports: [AuthModule]
})
export class CatsModule { }

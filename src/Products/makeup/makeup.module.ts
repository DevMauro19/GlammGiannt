import { Module } from '@nestjs/common';
import { MakeupService } from './makeup.service';
import { MakeupController } from './makeup.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Makeup } from './entities/makeup.entity';

@Module({
  controllers: [MakeupController],
  providers: [MakeupService],
  imports: [TypeOrmModule.forFeature([Makeup])],
})
export class MakeupModule {}

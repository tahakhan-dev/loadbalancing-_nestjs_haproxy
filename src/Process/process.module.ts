import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { ProcessCommandHandler } from './commands.handler';
import { ProcessQueryHandler } from './query.handler';
import { ProcessService } from './process.service';
import { ProcessRepository } from './process.repository';
import { ProcessController } from './process.controller';
import { ProcessCommand } from './commands/process.command';
import { GetProcessQuery } from './query/get-process.query';
import 'dotenv/config';



@Module({
    imports: [CqrsModule],
    providers: [
        ProcessService,
        ProcessRepository,
        ProcessCommandHandler,
        ProcessCommand,
        ProcessQueryHandler,
        GetProcessQuery
    ],
    controllers: [ProcessController],
    exports: [ProcessService],
})
export class ProcessModule { }

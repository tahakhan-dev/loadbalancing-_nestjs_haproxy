import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ProcessCommand } from './commands/process.command';
import { FetchDto } from './dto/process.dto';

@Injectable()
export class ProcessService {

  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) { }
   postProcessIdServiceHandler(FetchDto: FetchDto) {
    return  this.commandBus.execute(
      new ProcessCommand(FetchDto),
    );
  }


}

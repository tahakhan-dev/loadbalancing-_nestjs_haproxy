import { Controller, Post, Body, } from '@nestjs/common';
import { ProcessService } from './process.service';
import { FetchDto } from './dto/process.dto';
@Controller('Process')
export class ProcessController {
  constructor(
    private readonly service: ProcessService,
  ) { }

  @Post('/PostProcessId/:text')
  postProcess(@Body() fetchProcessId: FetchDto): any {
    try {
      return this.service.postProcessIdServiceHandler(fetchProcessId);

    } catch (error) {
      return error
    }
  }
}

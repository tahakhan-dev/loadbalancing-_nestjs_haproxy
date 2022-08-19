import { ICommand } from '@nestjs/cqrs';
import { FetchDto } from '../dto/process.dto';

export class ProcessCommand implements ICommand {
    constructor(
        public readonly FetchDto: FetchDto
    ) { }
}

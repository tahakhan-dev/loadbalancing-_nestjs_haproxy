import { IQuery } from '@nestjs/cqrs';
import { FetchDto } from '../dto/process.dto';

export class GetProcessQuery implements IQuery {
    public constructor(
        public readonly param: FetchDto,
    ) { }
}

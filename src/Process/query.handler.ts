import { EventPublisher, IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetProcessQuery } from "./query/get-process.query";
import { ProcessRepository } from "./process.repository";

@QueryHandler(GetProcessQuery)
export class ProcessQueryHandler implements IQueryHandler<any> {
    constructor(
        private readonly repository: ProcessRepository,
        private readonly publisher: EventPublisher,
    ) { }

    // @ts-ignore
    async execute(query: GetProcessQuery, resolve: (value?) => void) {
        return true;
    }
}
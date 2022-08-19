import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";;
import { ProcessCommand } from "./commands/process.command";
import { ProcessRepository } from "./process.repository";

@CommandHandler(ProcessCommand)
export class ProcessCommandHandler implements ICommandHandler<ProcessCommand> {
    constructor(
        private readonly AccountRepo: ProcessRepository,
        private readonly publisher: EventPublisher,
    ) { }

    // @ts-ignore
    execute(command: ProcessCommand, resolve: (value?) => void) {

        const getAccount = this.publisher.mergeObjectContext(
            this.AccountRepo.getProcessId(command.FetchDto)
        );
        return getAccount;
    }
}
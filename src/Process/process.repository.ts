import { Inject, Injectable, Logger } from "@nestjs/common";
import { FetchDto } from "./dto/process.dto";
import 'dotenv/config';


@Injectable()
export class ProcessRepository {
    constructor(
    ) { }

    getProcessId(fetchProcessId: FetchDto) : any {

        return {text:`${fetchProcessId.text}-${process.env.APP_PORT}`};
    }




}
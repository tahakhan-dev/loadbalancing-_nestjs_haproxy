import { IsNotEmpty } from 'class-validator';

export class FetchDto {
    @IsNotEmpty()
    text: string;
}

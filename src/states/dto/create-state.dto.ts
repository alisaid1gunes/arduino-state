import {IsBoolean, IsNotEmpty,} from "class-validator";

export class CreateStateDto {
    @IsNotEmpty()
    @IsBoolean()
    public isActive: boolean;
}

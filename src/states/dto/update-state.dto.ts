import {IsBoolean} from "class-validator";

export class UpdateStateDto {
    @IsBoolean()
    public isActive: boolean;
}

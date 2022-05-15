import { IsNotEmpty, IsNumber, Length } from 'class-validator';
import { IsNotGrpcDefaultValue, IsUserId } from 'src/decorator';

export class UserTagInput {
  @IsNotEmpty()
  @Length(4, 16)
  @IsUserId()
  @IsNotGrpcDefaultValue()
  userId: string;

  @IsNotEmpty()
  @IsNumber()
  @IsNotGrpcDefaultValue()
  tagId: number;
}

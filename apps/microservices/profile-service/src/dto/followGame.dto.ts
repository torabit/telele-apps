import { IsNotEmpty, IsNumber } from 'class-validator';
import { IsUserId } from 'src/decorator';

export class CreateFollowGameInput {
  @IsNotEmpty()
  @IsUserId()
  userId: string;

  @IsNotEmpty()
  @IsNumber()
  gameId: number;
}

export class DeleteFollowGameInput {
  @IsNotEmpty()
  @IsUserId()
  userId: string;

  @IsNotEmpty()
  @IsNumber()
  gameId: number;
}

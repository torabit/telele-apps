import { IsNotEmpty, IsNumber } from 'class-validator';
import { IsUserId } from 'src/decorator';

export class CreateFollowUserInput {
  @IsNotEmpty()
  @IsUserId()
  userId: string;

  @IsNotEmpty()
  @IsUserId()
  followUserId: string;
}

export class DeleteFollowUserInput {
  @IsNotEmpty()
  @IsUserId()
  userId: string;

  @IsNotEmpty()
  @IsUserId()
  followUserId: string;
}

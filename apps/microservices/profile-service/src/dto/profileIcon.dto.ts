import { IsNotEmpty, IsUrl, MaxLength } from 'class-validator';

export class CreateProfileIconInput {
  @IsNotEmpty()
  @MaxLength(30)
  profileId: string;

  @IsNotEmpty()
  @MaxLength(256)
  @IsUrl()
  path: string;
}

export class UpdateProfileIconInput {
  @IsNotEmpty()
  @MaxLength(30)
  profileId: string;

  @IsNotEmpty()
  @MaxLength(256)
  @IsUrl()
  path: string;
}

export class DeleteProfileIconInput {
  @IsNotEmpty()
  @MaxLength(30)
  profileId: string;
}

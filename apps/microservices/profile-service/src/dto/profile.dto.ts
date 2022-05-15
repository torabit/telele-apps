import { Length, Max, Min, MaxLength, IsOptional } from 'class-validator';
import { Sex } from 'grpc/protobuf/telele/type/gender';
import { Color } from 'grpc/protobuf/google/type/color';
import { DateMessage } from 'grpc/protobuf/google/type/date';
import { TimeOfDay } from 'grpc/protobuf/google/type/timeofday';
import { ProfileIcon, FollowGame } from '@prisma/client_profile';
import {
  IsDateMessage,
  IsProtoColor,
  IsUserId,
  IsTimeOfDay,
} from 'src/decorator';

export class OptionalProfile {
  id?: string;
  userId?: string;
  name?: string;
  genderId?: number;
  personalColor?: string;
  biography?: string;
  birthday?: Date | null;
  startTime?: Date | null;
  endTime?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
  followGames?: FollowGame[];
  profileIcon?: ProfileIcon;
}

export class CreateProfileInput {
  @IsUserId()
  userId: string;

  @Length(1, 50)
  name: string;

  @IsOptional()
  @Min(0)
  @Max(3)
  genderId?: Sex;

  @IsOptional()
  @IsProtoColor({ message: 'Object is not proto color type' })
  personalColor?: Color;

  @IsOptional()
  @MaxLength(1000)
  biography?: string;

  @IsOptional()
  @IsDateMessage({ message: 'Object is not date message type' })
  birthday?: DateMessage;

  @IsOptional()
  @IsTimeOfDay({ message: 'Object is not time of day type' })
  startTime?: TimeOfDay;

  @IsOptional()
  @IsTimeOfDay({ message: 'Object is not time of day type' })
  endTime?: TimeOfDay;
}

export class UpdateProfileInput {
  @IsOptional()
  @MaxLength(30)
  profileId: string | undefined;

  @IsOptional()
  @IsUserId()
  userId: string | undefined;

  @IsOptional()
  @Length(1, 50)
  name?: string;

  @IsOptional()
  @Min(0)
  @Max(3)
  genderId?: Sex;

  @IsOptional()
  @IsProtoColor({ message: 'Object is not proto color type' })
  personalColor?: Color;

  @IsOptional()
  @MaxLength(1000)
  biography?: string;

  @IsOptional()
  @IsDateMessage({ message: 'Object is not date message type' })
  birthday?: DateMessage;

  @IsOptional()
  @IsTimeOfDay({ message: 'Object is not time of day type' })
  startTime?: TimeOfDay;

  @IsOptional()
  @IsTimeOfDay({ message: 'Object is not time of day type' })
  endTime?: TimeOfDay;
}

export class DeleteProfileInput {
  @IsOptional()
  @MaxLength(30)
  profileId: string | undefined;

  @IsOptional()
  @IsUserId()
  userId: string | undefined;
}

export class UpdateUserIdOnProfileInput {
  @IsOptional()
  @MaxLength(30)
  profileId: string | undefined;

  @IsOptional()
  @IsUserId()
  formerUserId: string | undefined;

  @IsUserId()
  updatedUserId: string;
}

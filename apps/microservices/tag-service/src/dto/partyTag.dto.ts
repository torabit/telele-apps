import { IsNotEmpty, IsNumber } from 'class-validator';
import { IsNotGrpcDefaultValue } from 'src/decorator';

export class PartyTagInput {
  @IsNotEmpty()
  @IsNumber()
  @IsNotGrpcDefaultValue()
  partyId: number;

  @IsNotEmpty()
  @IsNumber()
  @IsNotGrpcDefaultValue()
  tagId: number;
}

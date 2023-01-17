import {IsNotEmpty, IsEmail, MaxLength, IsString, IsNumber, isURL, IsOptional,} from 'class-validator';
import { Exclude,Expose,Type,} from 'class-transformer';

export class GetPaginatedOrderDto {
    @IsNumber()
    @IsOptional()
    @Type(()=> Number)
    page: number;
  
    @IsNumber()
    @IsOptional()
    @Type(()=> Number)
    item: number;
  
}
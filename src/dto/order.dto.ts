import {IsNotEmpty, IsEmail, MaxLength, IsString, IsNumber, isURL, IsOptional, IsEnum,} from 'class-validator';
import { Exclude,Expose,Type,} from 'class-transformer';
import { State } from 'src/enum/state.enum';

export class OrderDto {


  @IsString()
  @Exclude()
  orderId: string;



  @IsEmail()
  @IsNotEmpty()
  @MaxLength(255)
  @Expose()
  email: string;


  @IsNumber()
  phoneNum: string

  @IsString()
  description: string 
  
  @IsNumber()
  cost: string 

  @IsOptional()
  image:string //for now because it will be an image api

  meeting_date: string 

  meeting_link: string

  @IsEnum(State)
  state: State;

}
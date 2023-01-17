import {IsNotEmpty, IsEmail, MaxLength, IsString, IsNumber, isURL, IsOptional,} from 'class-validator';
import { Exclude,Expose,Type,} from 'class-transformer';

export class OrderDto {

  @IsString()
  @Exclude()
  retailerId: string;

  @IsString()
  @Exclude()
  customerId: string;



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
}
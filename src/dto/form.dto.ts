import {IsNotEmpty, IsEmail, MaxLength, IsString, IsNumber, isURL, IsOptional,} from 'class-validator';
import { Exclude,Expose,Type,} from 'class-transformer';

export class FormDto {

  @IsString()
  @Exclude()
  retailerId: string;

  @IsString()
  @Exclude()
  customerId: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @Expose()
  name: string;

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

  meeting_date: Date 

  meeting_link: string
}
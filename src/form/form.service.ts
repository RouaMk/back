import {  Body } from '@nestjs/common';
import { FormDto } from 'src/dto/form.dto';
import { Injectable } from '@nestjs/common';
import { Form } from 'src/entities/form.entity';

@Injectable()
export class FormService {

    forms: Form[]=[];


    getForms() : Form[] {
      return this.forms;
    }


    submitForm(formData: FormDto) : Form {


      const form ={

        name, email , phoneNum , description 
        
      }; 
      
      this.forms.push(form);
      return form ;
      }
        

}

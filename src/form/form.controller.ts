import { Controller, Post, Body } from '@nestjs/common';
import { FormDto } from 'src/dto/form.dto';
import { FormService } from './form.service';
import { Form } from 'src/entities/form.entity';


@Controller('form')
export class FormController {

  constructor(
    private formService: FormService
  ) {}


@Post()
  submitForm(@Body() formData: FormDto) : Form {
    // do something with the form data
    return this.formService.submitForm(formData);
  }
    
}

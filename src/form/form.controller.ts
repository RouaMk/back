import { Controller, Post, Body } from '@nestjs/common';
import { FormDto } from 'src/dto/form.dto';


@Controller('form')
export class FormController {
@Post()
  submitForm(@Body() formData: FormDto) {
    // do something with the form data
    console.log(formData);
  }
    
}

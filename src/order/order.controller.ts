import { Controller, Post, Body } from '@nestjs/common';
import { OrderDto } from 'src/dto/order.dto';
import { OrderService } from './order.service';
import { Order } from 'src/entities/order.entity';


@Controller('order')
export class OrderController {

  constructor(
    private orderService: OrderService
  ) {}



@Post()
  submitForm(@Body() orderData: OrderDto)  {   
     this.orderService.submitForm(orderData);
     console.log();
    }
    
}

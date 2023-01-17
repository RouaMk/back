import { Controller, Post, Body , Get , Query, Put ,Delete } from '@nestjs/common';
import { OrderDto } from 'src/dto/order.dto';
import { GetPaginatedOrderDto } from 'src/dto/getPaginatedOrder.dto';
import { OrderService } from './order.service';
import { Order } from 'src/entities/order.entity';



@Controller('order')
export class OrderController {

  constructor(
    private orderService: OrderService
  ) {}



@Post()
  submitForm(@Body() orderData: OrderDto) : Order {   
     return this.orderService.submitForm(orderData);
     console.log("ya ilehi");
     
    }
    
@Get()
    getOrders(
      @Query() mesQueryParams: GetPaginatedOrderDto,
    ): Order[] {
      return this.orderService.getOrders();
    }


@Get('/:orderId')
    getOrdersById(
      @Query() mesQueryParams: GetPaginatedOrderDto,
    ): Order[] {
      return this.orderService.getOrders();
    }    
  
@Put()



@Delete()
deleteOrder(){

}


}

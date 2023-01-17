import { Body } from '@nestjs/common';
import { OrderDto } from 'src/dto/order.dto';
import { Injectable } from '@nestjs/common';
import { Order } from 'src/entities/order.entity';

@Injectable()
export class OrderService {

    orders: Order[]=[];

 
   getOrders() : Order[]{
      return this.orders ;
   }



    submitForm(orderData: OrderDto): Order {

    const { 
        retailerId,
        customerId , 
        email, 
        phoneNum ,  
        description,
        cost,  
        image,
        meeting_date, 
        meeting_link, } = orderData ;
           
     const order ={
        retailerId,
        customerId , 
        email, 
        phoneNum ,  
        description,
        cost,  
        image,
        meeting_date, 
        meeting_link,
     }


     this.orders.push(order);
       return order ; 
    

      }
        

}

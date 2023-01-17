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
        email, 
        phoneNum ,  
        description,
        cost,  
        image,
        meeting_date, 
        meeting_link, state} = orderData ;

        let orderId;
        if (this.orders.length) {
           orderId = this.orders[this.orders.length - 1].orderId + 1;
        } else {
           orderId = 1;
        }
           
     const order ={
   
        orderId , 
        email, 
        phoneNum ,  
        description,
        cost,  
        image,
        meeting_date, 
        meeting_link,
        state
     }


     this.orders.push(order);
       return order ; 
    

      }
        

}

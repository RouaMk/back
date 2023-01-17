import {  Body } from '@nestjs/common';
import { OrderDto } from 'src/dto/order.dto';
import { Injectable } from '@nestjs/common';
import { Order } from 'src/entities/order.entity';

@Injectable()
export class OrderService {

    orders: Order[]=[];



    submitForm(formData: OrderDto) {


    const { 
        retailerId,
        customerId , 
        name, 
        email, 
        phoneNum ,  
        description,
        cost,  
        image,
        meeting_date, 
        meeting_link, } = formData ;
           
     const order ={
        retailerId,
        customerId , 
        name, 
        email, 
        phoneNum ,  
        description,
        cost,  
        image,
        meeting_date, 
        meeting_link,
     }


     this.orders.push(order);
      
    

      }
        

}

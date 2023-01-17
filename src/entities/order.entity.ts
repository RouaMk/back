import { Status } from 'src/enum/status.enum';

export class Order {

    orderId: string; //unique and automatically generated  

    description: string 

    budget: string  

    image: string //for now because it will be an image api

    cost: string  

    meeting_date: string

    meeting_link: string

    status: Status
  }
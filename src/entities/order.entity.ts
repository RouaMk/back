import { State } from 'src/enum/state.enum';

export class Order {

    orderId: string;  
    email: string;
    phoneNum: string  
    description: string 
    cost: string   
    image: string //for now because it will be an image api
    meeting_date: string
    meeting_link: string
    state: State
  }
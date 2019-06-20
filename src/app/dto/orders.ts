import {Customer} from './customer';

export class Orders {
  constructor( public oId?: number, public date?: string, public totalPrice?: number, public customer?: Customer) {}
}

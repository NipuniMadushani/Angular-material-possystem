import {Item} from './item';
import {Customer} from './customer';
import {OrderDetails} from './order-details';

export class PlaceOrder {
  constructor(public itemDTO?: Item, public customerDTO?: Customer, public orderDetaildsDTO?: Array<OrderDetails>) {}
}

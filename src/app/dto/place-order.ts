import {Item} from './item';
import {Customer} from './customer';
import {OrderDetails} from './order-details';
import {Orders} from './orders';

export class PlaceOrder {
  constructor(public itemDTO?: Item, public orderDTO?: Orders, public orderDetaildsDTO?: Array<OrderDetails>) {}
}

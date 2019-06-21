import {Item} from './item';
import {Customer} from './customer';
import {OrderDetailsPK} from './order-details-pk';
import {Orders} from './orders';

export class OrderDetails {
  constructor(public quntity?: number,
              public unitprice?: number, public item?: Item, public order?: Orders, public orderDetailsPK?: OrderDetailsPK ) {}
}

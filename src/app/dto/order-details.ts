import {Item} from './item';
import {Customer} from './customer';
import {OrderDetailsPK} from './order-details-pk';

export class OrderDetails {
  constructor(public quntity?: number,
              public unitprice?: number, public item?: Item, public customer?: Customer, public orderDetailsPK?: OrderDetailsPK ) {}
}

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
// @ts-ignore
import {Customer} from '../../../dto/customer';
import {OrderDetails} from '../../../dto/order-details';
import {Item} from 'src/app/dto/item';
import {OrderDetailsPK} from '../../../dto/order-details-pk';
import {PlaceOrder} from '../../../dto/place-order';
import {Orders} from 'src/app/dto/orders';
import {NgForm} from '@angular/forms';
import {ItemService} from '../../../service/item.service';
import {CustomerService} from '../../../service/customer.service';
import {PlaceorderService} from '../../../service/placeorder.service';

@Component({
  selector: 'app-manage-placeorder',
  templateUrl: './manage-placeorder.component.html',
  styleUrls: ['./manage-placeorder.component.css']
})
export class ManagePlaceorderComponent implements OnInit {

  customers: Array<Customer> = [];
  selectedItems: Array<OrderDetails> = [];
  FullTotal = 0;
  // @ts-ignore
  serchedItems: Item = new Item();
  serchedCustomers: Customer = new Customer('', '', '');
  // tslint:disable-next-line:variable-name
  orderDetail_PKDto: OrderDetailsPK;
  orderDetail: OrderDetails;
  items: Array<Item> = [];
  placeOrder: PlaceOrder;
  orders: Orders;
  Total = 0;
  mydate = Date.now();
  @ViewChild('orderFrm', {static: true }) orderFrm: NgForm;


  constructor(private placeOrderService: PlaceorderService, private customerService: CustomerService, private itemService: ItemService
    ,         private elem: ElementRef) { }
  ngOnInit() {
    this.getCustomerId();
    this.getItemCode();
  }
  getCustomerId(): void {
    this.customerService.getAllCustomers().subscribe(
      (result) => {
        this.customers = result;
        console.log(this.customers);
      }
    );

  }


  searchItems(event: any): void {
    this.itemService.searchItem(event.target.value).subscribe(
      (result) => {
        this.serchedItems = result;
        console.log(this.serchedItems);
      }
    );

  }

  searchCustomer(event: any): void {
    this.customerService.searchCustomer(event.target.value).subscribe(
      (result) => {
        this.serchedCustomers = result;
        console.log(this.serchedCustomers);
      }
    );
  }


  getItemCode() {
    this.itemService.getAllItems().subscribe(
      (result) => {
        this.items = result;
      }
    );
  }

  SelectOrderDetails(): void {

    const orderDate = this.elem.nativeElement.querySelector('#orderDate').value;
    const qty = this.elem.nativeElement.querySelector('#qty').value;
    const orderId = this.elem.nativeElement.querySelector('#orderid').value;

    this.Total = qty * this.serchedItems.unitPrice;
    this.FullTotal = this.FullTotal + this.Total;
    const price = this.FullTotal;
    console.log(price);

    this.orders = new Orders(orderId, orderDate, this.Total, this.serchedCustomers);
    console.log(this.orders.totalPrice);
    this.orderDetail_PKDto = new OrderDetailsPK();
    this.orderDetail = new OrderDetails();
    this.orderDetail.quntity = qty;
    this.orderDetail.unitprice = this.serchedItems.qtyOnHand;
    this.orderDetail.item = this.serchedItems;
    this.orderDetail.order = this.orders;
    this.orderDetail.orderDetailsPK = this.orderDetail_PKDto;

    this.selectedItems.push(this.orderDetail);

    console.log(this.selectedItems);
  }


  addOrder(): void {
    this.placeOrder = new PlaceOrder();
    this.placeOrder.itemDTO = this.serchedItems;
    this.placeOrder.orderDTO = this.orders;
    this.placeOrder.orderDetaildsDTO = this.selectedItems;

    this.placeOrderService.placeOrder(this.placeOrder).subscribe(
      (result) => {
        if (result) {
          alert('Order has been saved successfully');
        } else {
          alert('Failed to save the Order');
        }
      }
    );


  }
}

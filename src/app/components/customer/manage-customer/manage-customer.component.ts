import {Component, OnInit, ViewChild} from '@angular/core';
import {Customer} from '../../../dto/customer';
import {CustomerService} from '../../../service/customer.service';
import {NgForm} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.css']
})
export class ManageCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  customerList: Array<Customer> = [];
  manually = false;
  cust: Customer = null;

  @ViewChild('customerForm', {static: true}) customerForm: NgForm;
  displayedColumns: string[] = ['id', 'name', 'address', 'actions', 'Edit'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<Customer>(this.customerList);
  constructor(private service: CustomerService) { }

  ngOnInit() {
this.allCustomer();
  }


  allCustomer(): void {
    // this.service.getAllCustomers().subscribe(value =>
    //   this.customerList = value);
    // console.log(this.customerList);
    this.customerList = new Array();
    this.service.getAllCustomers().subscribe(value => {
      console.log(value);
      this.customerList = value;
      console.log(this.customerList);
      this.dataSource.data = this.customerList;
      // this.paginator.length = this.numberList.length;
    });
  }

  saveCustomer(): void {
    this.service.saveCustomer(this.customer).subscribe(
      (result) => {
        console.log(this.customer);
        console.log(this.customerForm);
        alert('Customer Added Successfully ');
        this.allCustomer();

      }
    );
  }

  onDelete(id: number): void {
    if (confirm('Are you want to delete this Customer?')) {
      console.log(id);
      this.service.deleteCustomer(id).subscribe(
        (result) => {
          alert('Customer Delete Successfully');
        }
      );
    }
  }

  updateSubmit(row) {
    this.customerForm.form.get('id').setValue(row.id);
    this.customerForm.form.get('name').setValue(row.name);
    this.customerForm.form.get('address').setValue(row.address);
  }
}

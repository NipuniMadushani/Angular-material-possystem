import {Component, OnInit, ViewChild} from '@angular/core';
import {Customer} from '../../../dto/customer';
import {CustomerService} from '../../../service/customer.service';
import {NgForm} from '@angular/forms';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';



@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.css']
})
export class ManageCustomerComponent implements OnInit {
  constructor(private service: CustomerService) { }

  customer: Customer = new Customer();
  customerList: Array<Customer> = [];
  manually = false;



  @ViewChild(MatSort, {static: true})sort: MatSort;
  @ViewChild('customerForm', {static: true}) customerForm: NgForm;
  @ViewChild('paginator', {static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'name', 'address', 'actions', 'Edit'];
  // dataSource = ELEMENT_DATA;

  dataSource = new MatTableDataSource<Customer>(this.customerList);
  isEdit = false;


  ngOnInit() {
   this.allCustomer();
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;
  }




  allCustomer(): void {

    this.customerList = new Array();
    this.service.getAllCustomers().subscribe(value => {
      console.log(value);
      this.customerList = value;
      console.log(this.customerList);
      this.dataSource.data = this.customerList;
      this.paginator.length = this.customerList.length;
    });
  }


  searchCustomer(id: string) {
    // this.customerList = new Array();
    this.service.searchCustomer(id).subscribe(value => {
      console.log(value);
      this.customerForm.form.get('name').setValue(value.name);
      this.customerForm.form.get('address').setValue(value.address);
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
          this.allCustomer();
        }
      );
    }
  }

  updateSubmit(row) {
    this.customerForm.form.get('id').setValue(row.id);
    this.customerForm.form.get('name').setValue(row.name);
    this.customerForm.form.get('address').setValue(row.address);
  }

  updateCustomer(id): void {
    this.service.updateCustomer(id).subscribe((result) => {
      alert('Customer Update Successfully');
      this.clear();
      this.manually = true;
      this.allCustomer();

    });

  }

  private clear() {
  }


  // searchCustomer(id: string): void {
  //   this.service.searchCustomer(id).subscribe(value => {
  //     console.log(value);
  //
  //     this.custo = value;
  //
  //     console.log(this.custo);
  //
  //     for (const con of this.custo) {
  //       console.log(con);
  //
  //     }
  //   });

    // this.service.searchCustomer(id).subscribe(value => {
    //   console.log(value);
    //   this.customerList = value;
    //   console.log(this.customerList);
    //   this.dataSource.data = this.customerList;
    //   console.log(this.dataSource.data);
    // });




update(row) {
    console.log(row);
    if (confirm('Are You Want to Edit this Customer...!')) {

      this.isEdit = true;
      this.customerForm.form.get('id').setValue(row.id);
      this.customerForm.form.get('name').setValue(row.name);
      this.customerForm.form.get('address').setValue(row.address);

      this.allCustomer();

    }
  }
}

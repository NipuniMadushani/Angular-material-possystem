import {Component, OnInit, ViewChild} from '@angular/core';
import {ItemService} from '../../../service/item.service';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {NgForm} from '@angular/forms';
import {Item} from '../../../dto/item';

@Component({
  selector: 'app-manage-item',
  templateUrl: './manage-item.component.html',
  styleUrls: ['./manage-item.component.css']
})
export class ManageItemComponent implements OnInit {

  constructor(private  itemService: ItemService) { }

 // @ts-ignore
  item: Item = new Item();
  itemList: Array<Item> = [];
  manually = false;
  @ViewChild(MatSort, {static: true})sort: MatSort;
  @ViewChild('itemForm', {static: true}) customerForm: NgForm;
  @ViewChild('paginator', {static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ['code', 'description', 'qtyOnHand', 'unitPrice', 'actions', 'Edit'];
  // dataSource = ELEMENT_DATA;

  dataSource = new MatTableDataSource<Item>(this.itemList);
  isEdit = false;




  ngOnInit() {
    this.allItem();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private allItem(): void {
    this.itemList = new Array();
    this.itemService.getAllItems().subscribe(value => {
      console.log(value);
      this.itemList = value;
      console.log(this.itemList);
      this.dataSource.data = this.itemList;
      this.paginator.length = this.itemList.length;
    });
  }

  saveItem(): void {

    this.itemService.saveItem(this.item).subscribe(
      (result) => {
        console.log(this.item);
        console.log(this.customerForm);
        alert('Customer Added Successfully ');
        this.allItem();

      }
    );
  }

  updateItem(item: Item) {
  }

  searchItem(code: string) {
  }

  onDelete(code: number) {
    if (confirm('Are you want to delete this Customer?')) {
      console.log(code);
      this.itemService.deleteItem(code).subscribe(
        (result) => {
          alert('Customer Delete Successfully');
          this.allItem();
        }
      );
    }
  }

  updateSubmit(element: any) {
  }

  update(element: any) {
  }
}

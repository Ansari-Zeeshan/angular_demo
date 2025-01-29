import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../row-table/product';
import { ProductService } from '../row-table/productservice';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-toggle-table',
  templateUrl: './toggle-table.component.html',
  styleUrls: ['./toggle-table.component.css']
})
export class ToggleTableComponent implements OnInit {

  products: Product[] = [];
  
  cols: Column[] = [];
  
  private _selectedColumns: Column[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductsSmall().then(data => this.products = data);

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' }
    ];

    this._selectedColumns = this.cols;
  }

  @Input() get selectedColumns(): Column[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: Column[]) {
    //restore original order
    this._selectedColumns = this.cols.filter(col => val.includes(col));
  }

}

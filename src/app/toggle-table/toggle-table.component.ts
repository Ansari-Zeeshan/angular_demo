import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../row-table/product';
import { ProductService } from '../row-table/productservice';

@Component({
  selector: 'app-toggle-table',
  templateUrl: './toggle-table.component.html',
  styleUrls: ['./toggle-table.component.css']
})
export class ToggleTableComponent implements OnInit {

  products: Product[];
    
  cols: any[];

  _selectedColumns: any[];

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

  @Input() get selectedColumns(): any[] {
      return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
      //restore original order
      this._selectedColumns = this.cols.filter(col => val.includes(col));
  }

}

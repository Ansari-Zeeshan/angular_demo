import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from './customerservice';
import { Customer } from './customer';
import { SortEvent } from 'primeng/api';
import { MessageService } from "primeng/api";

@Component({
  selector: 'app-row-table',
  templateUrl: './row-table.component.html',
  styleUrls: ['./row-table.component.scss'],
  providers: [MessageService]
})
export class RowTableComponent implements OnInit {
  customers: Customer[];
  first = 0;
  rows = 10;
  statuses: any[];
  cols: any[];
  _selectedColumns: any[];
  
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomersLarge().then(data => this.customers = data);
    // console.log(`Data: ${this.products}`); 
    this.statuses = [
      { label: "Unqualified", value: "unqualified" },
      { label: "Qualified", value: "qualified" },
      { label: "New", value: "new" },
      { label: "Negotiation", value: "negotiation" },
      { label: "Renewal", value: "renewal" },
      { label: "Proposal", value: "proposal" }
    ];

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'country', header: 'Country' },
      { field: 'company', header: 'Company' },
      { field: 'status', header: 'Status' }
    ];

    this._selectedColumns = this.cols;
  }

  set selectedColumns(val: any[]) {
      //restore original order
      this._selectedColumns = this.cols.filter(col => val.includes(col));
      console.log( "final" , this._selectedColumns);
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
      this.first = this.first - this.rows;
  }

  reset() {
      this.first = 0;
  }

  isLastPage(): boolean {
      return this.customers ? this.first === (this.customers.length - this.rows): true;
  }

  isFirstPage(): boolean {
      return this.customers ? this.first === 0 : true;
  }

}

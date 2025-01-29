import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customerservice';
import { Customer } from './customer';
import { MessageService } from 'primeng/api';

interface Status {
  label: string;
  value: string;
}

interface Column {
  sort: string;
  field: string;
  header: string;
  name?: string;
}

@Component({
  selector: 'app-row-table',
  templateUrl: './row-table.component.html',
  styleUrls: ['./row-table.component.scss'],
  providers: [MessageService]
})
export class RowTableComponent implements OnInit {
  customers: Customer[] = [];
  first = 0;
  rows = 10;
  statuses: Status[] = [];  // Changed to a specific type
  cols: Column[] = [];      // Changed to a specific type
  _selectedColumns: Column[] = [];  // Changed to a specific type
  
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomersLarge().then(data => this.customers = data);

    this.statuses = [
      { label: "Unqualified", value: "unqualified" },
      { label: "Qualified", value: "qualified" },
      { label: "New", value: "new" },
      { label: "Negotiation", value: "negotiation" },
      { label: "Renewal", value: "renewal" },
      { label: "Proposal", value: "proposal" }
    ];

    this.cols = [
      { sort: 'name', field: 'name', header: 'Name' },
      { sort: 'country.name', field: 'country', header: 'Country', name: 'name' },
      { sort: 'company', field: 'company', header: 'Company' }
    ];

    this._selectedColumns = this.cols;
  }

  set selectedColumns(val: Column[]) {
    // Restore original order
    this._selectedColumns = this.cols.filter(col => val.includes(col));
    console.log("final", this._selectedColumns);
  }

  next(): void {
    this.first = this.first + this.rows;
  }

  prev(): void {
    this.first = this.first - this.rows;
  }

  reset(): void {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.customers ? this.first === (this.customers.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.customers ? this.first === 0 : true;
  }
}

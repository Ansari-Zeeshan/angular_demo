import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from './customer.service';
import { ProductService } from './productservice';
import { Product } from './product';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-primeng-table',
  templateUrl: './primeng-table.component.html',
  styleUrls: ['./primeng-table.component.css'],
  providers: [MessageService]
})
export class PrimengTableComponent implements OnInit {

  customers: Customer[];

    first = 0;

    rows = 10;

    selectedProduct1: Product;

    selectedProduct2: Product;

    selectedProduct3: Product;

    selectedProducts1: Product[];

    selectedProducts2: Product[];

    selectedProducts3: Product[];

    constructor(private CustomerService: CustomerService, private messageService: MessageService) { }

    ngOnInit() {
        this.CustomerService.getCustomersLarge().then(data => this.customers = data);
    }

    selectProduct(product: Product) {
        this.messageService.add({severity:'info', summary:'Product Selected', detail: product.name});
    }

    onRowSelect(event) {
        this.messageService.add({severity:'info', summary:'Product Selected', detail: event.data.name});
    }

    onRowUnselect(event) {
        this.messageService.add({severity:'info', summary:'Product Unselected',  detail: event.data.name});
    }

}

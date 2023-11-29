import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent {
  data_client:FormControl = new FormControl('');
  address:FormControl = new FormControl('');
  locaton:FormControl = new FormControl('');
  patent:FormControl = new FormControl('');
  brand:FormControl = new FormControl('');
  model:FormControl = new FormControl('');
  failure:FormControl = new FormControl('');

  phone:FormControl = new FormControl('');
  dni:FormControl = new FormControl('');
  kilometer:FormControl = new FormControl('');
  work_order:FormControl = new FormControl('');
  enrty_day:FormControl = new FormControl('');


}

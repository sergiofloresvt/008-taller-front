import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  menuNav = [
    {name: "Home", route: "home", icon: "home"},
    {name: "cliente", route: "add-client", icon: "person_add"},
    {name: "buscar", route: "all-clients", icon: "person_search"},
    {name: "facturas", route: "invoices", icon: "receipt_long"},
  ]
}

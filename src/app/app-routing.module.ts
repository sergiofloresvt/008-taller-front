import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/pages/home/home.component";
import { ServiceComponent } from "./components/service/service.component";
import { InvoicesComponent } from "./components/pages/invoices/invoices.component";
import { ContactComponent } from "./components/pages/contact/contact.component";



const routes : Routes =
[
   { path:'home', component:HomeComponent},
//    {path:'client', component:ClientComponent,
// children:[
//    {
//       path:'new-client',
//        component:NewClientComponent
//    },
//    {
//       path:'clients', 
//       component:ClientsComponent
//    }
//    ]
// },
   {path:'service', component:ServiceComponent},
   {path:'invoices', component:InvoicesComponent},
   {path:'contact', component:ContactComponent},
  

   {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
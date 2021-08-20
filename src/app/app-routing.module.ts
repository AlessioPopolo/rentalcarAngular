import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminHomepageComponent} from "./pages/admin-homepage/admin-homepage.component";
import {AutoComponent} from "./pages/auto/auto.component";
import {FormPageComponent} from "./pages/form-page/form-page.component";

const routes: Routes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full'},
  { path: 'admin', children: [
      {path: '', component: AdminHomepageComponent},
      {path: 'add/utente', component: FormPageComponent},
      {path: 'add/utente/save', redirectTo: '/admin'},
    ]
  },
  { path: 'auto', children: [
      {path: '', component: AutoComponent},
      {path: 'add/auto', component: FormPageComponent},
      {path: 'add/auto/save', redirectTo: '/auto'},
    ]
  },
];


/*{path: 'homepage/customers', canActivate: [AdminAuthGuard],
  children: [*/


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

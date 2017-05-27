import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {RegistrationComponent} from "./account/registration/registration.component";
import {LoginComponent} from "./account/login/login.component";
import {CompanyComponent} from "./account/company/company.component";
import {OperationsComponent} from "./operations/operations.component";
import {KpirRegistryComponent} from "./kpirregistry/kpirregistry.component";
import {VatRegistryComponent} from "./vatregistry/vatregistry.component";
import {CanActivateAuthGuard} from "./account/login/authguard";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'company',
    component: CompanyComponent,
    canActivate: [CanActivateAuthGuard]
  },
  {
    path: 'operations',
    component: OperationsComponent,
    canActivate: [CanActivateAuthGuard]
  },
  {
    path: 'vat-registry',
    component: VatRegistryComponent,
    canActivate: [CanActivateAuthGuard]
  },
  {
    path: 'kpir-registry',
    component: KpirRegistryComponent,
    canActivate: [CanActivateAuthGuard]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

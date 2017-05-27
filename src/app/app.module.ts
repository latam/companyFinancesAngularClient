import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RegistrationComponent} from "./account/registration/registration.component";
import {LoginComponent} from "./account/login/login.component";
import {AuthenticationService} from "./service/authentication.service";
import {HomeComponent} from "./home/home.component";
import {CanActivateAuthGuard} from "./account/login/authguard";
import {CompanyService} from "./service/company.service";
import {CompanyComponent} from "./account/company/company.component";
import {OperationsComponent} from "./operations/operations.component";
import {OperationsService} from "./service/operations.service";
import {DatePipe} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap"
import {OperationModalComponent} from "./operations/operation.modal.component";
import {VatRegistryService} from "./service/vatregistry.service";
import {VatRegistryComponent} from "./vatregistry/vatregistry.component";
import {KpirRegistryService} from "./service/kpirregistry.service";
import {KpirRegistryComponent} from "./kpirregistry/kpirregistry.component";
import {CompanyModalComponent} from "./account/company/company.modal.component";
import {AppRoutingModule} from "./app.routing.module";
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import {DateFilterComponent} from "./common/filter/date.filter.component";
import {DateFilterCriteria} from "./common/filter/date.filter.criteria";

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    CompanyComponent,
    CompanyModalComponent,
    OperationsComponent,
    OperationModalComponent,
    VatRegistryComponent,
    KpirRegistryComponent,
    DateFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    Angular2FontawesomeModule
  ],
  providers: [
    AuthenticationService,
    CompanyService,
    OperationsService,
    VatRegistryService,
    KpirRegistryService,
    CanActivateAuthGuard,
    DatePipe
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    OperationModalComponent,
    CompanyModalComponent,
    DateFilterComponent
  ],
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'


import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';



import { PagesComponent } from './pages.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


@NgModule({
  declarations: [
    ProgressComponent,
    DashboardComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent
  ],
  exports:[
    ProgressComponent,
    DashboardComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent
  ],
  imports: [
    
    FormsModule,
    CommonModule,
    SharedModule,
    RouterModule,
    ComponentsModule
  ]
})
export class PagesModule { }

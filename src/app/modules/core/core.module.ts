import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './components/layout/layout.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    LayoutComponent,
    HomeComponent
  ],
})
export class CoreModule {
}

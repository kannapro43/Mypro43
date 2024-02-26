import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Parent1Component } from './parent1/parent1.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './Practice/child/child.component';
import { ParentComponent } from './Practice/parent/parent.component';
import { ProductComponent } from './Practice/product/product.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { P1Component } from './Practice/p1/p1.component';
import { C1Component } from './Practice/c1/c1.component';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CounterComponent } from './Practice/counter/counter.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Parent1Component,
    ChildComponent,
    ParentComponent,
    ProductComponent,
    P1Component,
    C1Component,
    CounterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

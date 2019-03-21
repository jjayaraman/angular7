import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynaFormComponent } from './dyna-form/dyna-form.component';
import { ArrayFormComponent } from './array-form/array-form.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { ArrayForm2Component } from './array-form2/array-form2.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    DynaFormComponent,
    ArrayFormComponent,
    NestedFormComponent,
    ArrayForm2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

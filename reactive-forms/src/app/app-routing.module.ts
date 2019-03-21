import { ArrayForm2Component } from './array-form2/array-form2.component';
import { ArrayFormComponent } from "./array-form/array-form.component";
import { NestedFormComponent } from "./nested-form/nested-form.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SimpleFormComponent } from "./simple-form/simple-form.component";
import { DynaFormComponent } from "./dyna-form/dyna-form.component";

const routes: Routes = [
  { path: "simple", component: SimpleFormComponent },
  { path: "nested", component: NestedFormComponent },
  { path: "array", component: ArrayFormComponent },
  { path: "array2", component: ArrayForm2Component },
  { path: "dyna", component: DynaFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

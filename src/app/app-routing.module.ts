import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CkeComponent } from './component/cke/cke.component';
import { QuillComponent } from './component/quill/quill.component';


const routes: Routes = [
  {
    path: "cke", component: CkeComponent
  },
  {
    path: "quill", component: QuillComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/quill"
  },
  {
      path: "**", component: QuillComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

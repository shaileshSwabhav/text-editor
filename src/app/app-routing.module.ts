import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CkeComponent } from './component/cke/cke.component';
import { OnlineCkeComponent } from './component/online-cke/online-cke.component';
import { QuillComponent } from './component/quill/quill.component';


const routes: Routes = [
  {
    path: "ck", component: CkeComponent
  },
  {
    path: "quill", component: QuillComponent
  },
  {
    path: "component", component: OnlineCkeComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/ck"
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

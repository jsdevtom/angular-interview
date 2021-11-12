import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HotelsComponent} from "./hotels/hotels.component";
import {UsersComponent} from "./users/users.component";

const routes: Routes = [
  {
    path: 'hotels',
    component: HotelsComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

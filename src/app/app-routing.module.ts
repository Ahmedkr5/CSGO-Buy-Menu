import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddGunFormComponent} from './add-gun-form/add-gun-form.component';
import {AppComponent} from './app.component';
import {GunsComponent} from './guns/guns.component';
import {ReactiveFormGunComponent} from './reactive-form-gun/reactive-form-gun.component';


const routes: Routes = [{path:"Home", component:GunsComponent},
  {path:"Add-gun", component:AddGunFormComponent},
  {path:'modify/:id', component:ReactiveFormGunComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
